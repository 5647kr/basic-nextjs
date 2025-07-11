import { connectDB } from "@/util/db";
// 암호화해주는 라이브러리
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      let db = (await connectDB).db("forum");
      await db.collection("user_cred").insertOne(req.body);
      res.status(200).json("성공");
  }
};


// id: test1@test.com
// ps: xptmxm1