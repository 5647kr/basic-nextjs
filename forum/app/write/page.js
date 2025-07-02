export default function Write() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/test" method="POST">
        <label htmlFor="">글 제목</label>
        <input type="text" name="title"/>
        <label htmlFor="">글 내용</label>
        <input type="text" name="content" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}

// 서버로 post method요청하려면 form 태그 사용
// submit버튼을 누르면 form태그의 action속성에 작성한 url로 post요청을 보낸다.

// 버튼을 누르면 그걸 pages/api/test로 보냄
// api/test로 가면 그걸 mongodb에 저장
