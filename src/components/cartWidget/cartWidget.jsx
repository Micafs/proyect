import React from 'react'
import CartIcon from '../icons/cartIcon'

const CartWidget = ({itemCount}) => {
  return (
    <div>
        <CartIcon /> {itemCount}
    </div>
  )
}

export default CartWidget