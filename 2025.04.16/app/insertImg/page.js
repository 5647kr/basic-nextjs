export default function page() {
  const code = `
  <img src="" />
  `
  return (
    <div>
      <h2>이미지 삽입</h2>
      <p>이미지 삽입시 {code} 이와같이 항상 태그를 닫아야 한다.</p>
      <p>이미지는 public 폴더안에 넣어 사용하며 경로는 /이미지파일명.png 와 같이 작성한다.</p>

      <p>이미지를 그냥 넣어도 되지만 최적화 하여 넣는것이 좋다. lazyloading, 사이즈 최적화, layout shift 방지등 다양하다.</p>
      <p>이는 그냥 넣는 것이 아닌 최상단에 Image 태그를 import해온다. 0.list 페이지에서 확인할 수 있다.</p>
      <p>단점으론 이미지가 여러개인 경우 하나씩 설정해야하며, 외부 이미지를 불러올 시 width랑 height값을 설정해야만 한다.</p>
    </div>
  )
}
