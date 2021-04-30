import { formattedCurrency } from '../../utils/utils'

import defaultImage from '../../assets/logo.png'

import './styles.scss'

export function Cart({ cartOpened, closeCart, products, removeProduct }) {
  const amounts = products.map((product) => {
    return product.product.price.value
  })

  const total = amounts.reduce((acc, currency) => {
    return acc + currency
  }, 0)

  const totalInstallmentValue = (total / 10).toFixed(2)

  return (
    <div className="cart">
      {cartOpened === true && (
        <div className="cart_container">
          <ul>
            {products.length === 0 && (
              <div className="empty_card">
                <span>Nenhum item no carrinho!</span>
                <button onClick={closeCart} className="close">
                  X
                </button>
              </div>
            )}

            {products.map((product, index) => (
              <li className="cart_item" key={index}>
                <div className="img">
                  <img
                    src={product.product.images[0]}
                    alt="Name"
                    onError={(event) => {
                      event.target.onerror = null
                      event.target.src = `${defaultImage}`
                    }}
                  />
                </div>

                <div className="details">
                  <h3>{product.product.name}</h3>
                  <span>
                    {`${product.product.price.installments}x `}
                    {formattedCurrency(product.product.price.installmentValue)}
                    <br />
                    ou {formattedCurrency(product.product.price.value)} à vista
                  </span>
                </div>
                <button className="remove">X</button>
              </li>
            ))}

            {products.length > 0 && (
              <button onClick={closeCart} className="cart-close">
                Fechar Carrinho
              </button>
            )}
          </ul>

          {total !== 0 && (
            <div className="total">
              <span>subtotal</span>
              <span>10x {formattedCurrency(totalInstallmentValue)}</span>
              <span>ou {formattedCurrency(total)} à vista</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
