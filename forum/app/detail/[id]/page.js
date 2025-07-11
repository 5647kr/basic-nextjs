import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import Comment from "./Comment";


export default async function Detail({ params }) {
  const db = (await connectDB).db("forum");
  const { id } = await params;
  const result = await db.collection("post").findOne({ _id: new ObjectId(id) });


  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment />
    </div>
  );
}





// export default async function detail({ params }) {
//   const db = (await connectDB).db("forum");

//   const result = await db.collection("post").findOne({ _id: new ObjectId(params.id) });


  // 위와 같이 사용시 error 발생 이는 Next.js15부터 변경된 사항으로 params가 비동기(promise)로 처리되어 사용하기 전에 await로 기다려야 한다.
  // 원인
  // 1. Next.js 15에서 동적 라우트의 params가 promise 객체로 변경됨
  // 2. 기존처럼 params.id를 직접 접근하면 안되고, await params 후에 사용해야 함

  // 이에 방법은 2가지
  // 1. 구조 분해 할당
  // const { id } = await params;
  // const result = await db.collection("post").findOne({ _id: new ObjectId(id) });

  // 2. 한 줄 처리
  // const result = await db.collection("post").findOne({ _id: new ObjectId((await params).id) });




