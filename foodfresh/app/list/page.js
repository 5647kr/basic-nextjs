import "../globals.css"
// import Image from "next/image"
// import tomato from "/public/food0.png"

export default function List() {
  let product = ["토마토", "파스타", "코코넛"]
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <ul>
        {product.map((item, key) => {
          return (
            <li className="food" key={key}>
              <img src={`/food${key}.png`} alt="" className="food-img" />
              {/* 이미지 최적화(lazyLoading, 사이즈 최적화, layout shift 방지) */}
              {/* <Image src={tomato} className="food-img"></Image> */}
              <h4>{item} $40</h4>
            </li>
          )
        })}
        {/* <li className="food">
          <h4>상품1 $40</h4>
        </li>
        <li className="food">
          <h4>상품2 $40</h4>
        </li> */}
      </ul>
    </div>
  )
}
