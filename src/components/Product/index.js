import { useState } from 'react'

import { formattedCurrency } from '../../utils/utils'

import arrowRightIcon from '../../assets/right-arrow.svg'
import heartIcon from '../../assets/heart.svg'
import heartFavoriteIcon from '../../assets/heart-full.svg'
import defaultImage from '../../assets/logo.png'

import './styles.scss'

export function Product({ product, addProduct }) {
  const [favorite, setFavorite] = useState(false)

  function addFavorite() {
    setFavorite(true)
  }

  return (
    <div className="product_container">
      <div className="images">
        <div className="small_img">
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="Error"
                onError={(event) => {
                  event.target.onerror = null
                  event.target.src = `${defaultImage}`
                }}
              />
            </div>
          ))}
        </div>
        <div className="large_img">
          <img src={product.images[0]} alt={product.name} />
        </div>
      </div>
      <div className="description">
        <div className="title">
          <h2>
            {product.name}
            <button className="favorite" onClick={addFavorite}>
              <img
                src={favorite ? `${heartFavoriteIcon}` : `${heartIcon}`}
                alt="Favoritar"
              />
            </button>
          </h2>
        </div>
        <div className="prices">
          <div className="price">
            <span>
              {`${product.price.installments}x`}
              <strong>
                {' '}
                {formattedCurrency(product.price.installmentValue)}
              </strong>
            </span>
            <button onClick={() => addProduct(product.id)}>
              Adicionar ao carrinho
              <img src={arrowRightIcon} alt="Adicionar ao carrinho" />
            </button>
          </div>
          <div className="special_price">
            ou <strong>{formattedCurrency(product.price.value)}</strong> à vista
          </div>
        </div>
      </div>
    </div>
  )
}
