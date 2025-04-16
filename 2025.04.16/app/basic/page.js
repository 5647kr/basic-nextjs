export default function Basic() {
  // 변수 선언
  const name = "park"
  const age = 20;
  const link = "https://google.com";
  
  return (
    <div>
      <p>React처럼 html을 작성한다.</p>
      <p className="red">style도 React처럼 className으로 작성한다.</p>

      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by dev Kim</p>
      <p style={{color: "white", fontSize: "20px"}}>인라인 스타일 적용</p>
      <p className="title-sub">by design {name}, {age}</p>
      <a href={link}>구글 링크</a>
    </div>
  )
}
