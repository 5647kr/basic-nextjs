import { connectDB } from "@/util/db";
import Link from "next/link";
import ListItem from "./ListItem";
// import DetailLink from "./DetailLink";



export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);

    const serializedResult = result.map(item => ({
    ...item,
    _id: item._id.toString() // ObjectId를 문자열로 변환
  }));

  return (
    <ul className="list-bg">
      <ListItem result={serializedResult}/>



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


      // {result.map((item) => {
      //   console.log(item._id)
      //   return (
      //     <li className="list-item" key={item._id}>
      //       <Link href={`detail/${item._id}`}>
      //         <h4>{item.title}</h4>
      //         <p>{item.content}</p>
      //         <p>1월 1일</p>
      //       </Link>
      //       <Link href={`/edit/${item._id}`}>수정</Link>
      //       {/* <DetailLink /> */}
      //     </li>
      //   );
      // })}