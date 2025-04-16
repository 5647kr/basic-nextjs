import Image from "next/image";
import img0 from "/public/food0.png"

export default function page() {
  let product = ["토마토", "파스타", "코코넛"];
  console.log(product)
  return (
    <div>
      <h2 className="title">상품 목록</h2>
      <ul>
        {product.map((item, index) => {
          return (
            <li className="food" key={index}>
              <img src={`/food${index}.png`} alt="토마토" className="food-img"/>
              {/* <Image src={img0} alt="토마토" className="food-img"/> */}
              <h3>{item} $40</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
