export default async function Read(props) {
  const id = props.params.id;
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${id}`, {cache: "no-store"});
  const topic = await response.json();

  return (
    <>
      {/* 다이나믹 라우팅 */}
      <h2>{topic.title}</h2>
      {/* {props.params.id} */}
      {topic.body}
    </>
  )
}
