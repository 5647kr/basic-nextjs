export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      {/* post, get만 사용할 수 있다. */}
      <form action="/api/test" method="POST">
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}
