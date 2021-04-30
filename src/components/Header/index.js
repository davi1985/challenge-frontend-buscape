import logoImg from '../../assets/logo.png'
import menuIcon from '../../assets/menu.svg'

import './styles.scss'

export function Header({ openCart, quantity }) {
  return (
    <header>
      <div className="container">
        <img src={logoImg} alt="Logo" />

        {quantity !== 0 && <span>{quantity}</span>}

        <button className="open-cart" onClick={openCart}>
          <img src={menuIcon} alt="Abrir carrinho" />
        </button>
      </div>
    </header>
  )
}
