export default async function Read(props) {
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await response.json();

  return (
    <>
      {/* 다이나믹 라우팅 */}
      <h2>{topic.title}</h2>
      {props.params.id}
      {topic.body}
    </>
  )
}
