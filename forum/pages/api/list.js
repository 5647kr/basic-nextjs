import { connectDB } from "@/util/db";



  export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  // 1. db에 접속한다.
  const result = await db.collection("post").find().toArray();

  return 응답.status(200).json(result)

}