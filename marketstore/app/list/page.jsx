"use client"
import React, { useState } from 'react'

export default function List() {
  const product = ["토마토", "파스타", "코코넛"];
  const [count, setCount] = useState([0, 0, 0]);

  const handleIncrement = (index) => {
    const newCount = [...count];
    newCount[index] += 1;
    setCount(newCount);
  };

  const handleDecrement = (index) => {
    const newCount = [...count];
    if (newCount[index] > 0) {
      newCount[index] -= 1;
      setCount(newCount);
    }
  };

  return (
    <div>
      <h2 className='title'>상품목록</h2>
      <ul>
        {product.map((item, index) => {
          return (
          <li className='food' key={index}>
            <img src={`/food${index}.png`} className='food-img'/>
            <h3>{item}</h3>
            <strong>$40</strong>
            <div>
              <span> {count[index]} </span>
              <button onClick={() => {handleIncrement(index)}}>+</button>
              <button onClick={() => {handleDecrement(index)}}>-</button>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}
