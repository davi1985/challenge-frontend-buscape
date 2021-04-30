import { useState, useEffect } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { getProducts } from './services/api'

import './index.scss'

export function App() {
  const [productsList, setProductsList] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [productsSelected, setProductsSelected] = useState([])

  function fetchData() {
    getProducts().then((products) => setProductsList(products))
  }

  useEffect(() => {
    fetchData()
  }, [])

  function openCart() {
    setCartOpened(true)
  }

  function closeCart() {
    setCartOpened(false)
  }

  function addProductIntoCart(id) {
    setQuantity(quantity + 1)

    const selectedProducts = productsList.filter(
      (product) => product.product.id === id
    )

    setProductsSelected((preveState) => preveState.concat(selectedProducts))
  }

  return (
    <>
      <Header openCart={openCart} quantity={quantity} />
      <Cart
        cartOpened={cartOpened}
        closeCart={closeCart}
        products={productsSelected}
      />

      <div className="container">
        {productsList.map((product, index) => (
          <Product
            product={product.product}
            addProduct={() => addProductIntoCart(product.product.id)}
            key={index}
          />
        ))}
      </div>
    </>
  )
}
