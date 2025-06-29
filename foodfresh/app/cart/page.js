import "../globals.css"


export default function Cart() {
  return (
    <div>
      <h4 className="title">장바구니 목록</h4>
      <ul>
        <li className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1</p>
        </li>
        <li className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1</p>
        </li>
      </ul>
    </div>
  )
}
