import { connectDB } from "@/util/db";

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <ul className="list-bg">
      {result.map((item) => {
        return (
          <li className="list-item" key={item._id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>1월 1일</p>
          </li>
        );
      })}
      {/* <li className="list-item">
        <h4>글 제목</h4>
        <p>1월 1일</p>
      </li>
      <li className="list-item">
        <h4>글 제목</h4>
        <p>1월 1일</p>
      </li> */}
    </ul>
  );
}
