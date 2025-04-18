import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("noticeboard");
  let result = await db.collection("post").find().toArray();

  console.log(result)
  return (
    <div className="list-bg">
      <ul>
        {result.map((item) => {
          return (
          <li className="list-item">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>1월 1일</p>
          </li>
          )
        })}
      </ul>
    </div>
  )
}
