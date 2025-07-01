import { MongoClient } from "mongodb";
import { connectDB } from "@/util/db"

export default async function Home() {

  // const client = await connectDB;
  // const db = client.db("forum");
  // let result = await db.collection("post").find().toArray();
  const db = (await connectDB).db("forum");
  // 1. db에 접속한다.
  const result = await db.collection("post").find().toArray();
  // 2. post collection에 있는 모든 데이터를 가져와 arr형식으로 만든다.

  console.log(result)

  return (
    <div>
      <h1>
        {result[0].title}
        {result[0].content}
      </h1>
    </div>
  );
}
