import "../globals.css";
// import age from "./data.js"
import {age, name, hello} from "./data.js"

export default function Cart() {
  return (
    <div>
      <h1>{hello}</h1>
      <h4 className="title">장바구니 목록</h4>
      <ul>
        {/* <li className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1</p>
        </li>
         */}
        <li className="cart-item">
          <p>상품명 {age} {name}</p>
          <p>$40</p>
          <p>1</p>
        </li>
        <CartItem />
        <CartItem />
      </ul>
    </div>
  );
}

function CartItem() {
  return (
    <li className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1</p>
    </li>
  );
}

// component 만드는 법
//*
// 1. function 작명() {} ->작명은 영어 대문자로 시작
// 2. return (축약할 긴 HTML)
// 3. <작명/> 사용
// */

// component 사용 이유
// 재사용이 잦은 html 덩어리들을 주로 component로 만드는게 좋음

// next.js component의 종류는 2가지
// 1. server component -> 
// 그냥 만들면 server component가 된다.
// html에 자바스크립트 기능을 넣을 수 없다. (ex. onClick, useState, useEffect)
// 특징
// 1. 로딩 속도 빠름
// 2. 검색엔진 노출 유리
// 사용 추천
// 큰페이지는 server component


// 2. client component
// 최상단에 "use client"라 작성하면 그 아래의 모든 component는 client component가 된다.
// html에 자바스크립트 기능을 넣을 수 있다. (ex. onClick, useState, useEffect)
// 특징
// 1. 로딩 속도 느림(자바스크립트 많이 필요, hydration 필요)
// hydration이란 html을 유저에게 보낸 후에 자바스크립트로 html을 다시 읽고 분석하는 일
// 사용 추천
// JS 기능이 필요한 곳만 client component



