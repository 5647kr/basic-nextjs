import React from 'react'

export default function Cart() {
  const cart = ["토마토", "파스타"]
  return (
    <div>
      <h2 className='title'>장바구니</h2>
      <ul>
        <CartItem cart={cart[0]} />
        <CartItem cart={cart[1]} />
      </ul>
    </div>
  )
}

function CartItem(props) {
  return (
    <li className='cart-item'>
      <p>{props.cart}</p>
      <p>$40</p>
      <p>1</p>
    </li>
  )
}