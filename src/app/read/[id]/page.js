export default function Read(props) {
  return (
    <>
      {/* 다이나믹 라우팅 */}
      <h2>read</h2>
      {props.params.id}
    </>
  )
}
