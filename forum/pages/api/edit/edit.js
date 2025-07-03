import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";



export default async function editHandler(req, res) {
  if(req.method === "POST") {
    let updateContent = {title: req.body.title, content: req.body.content}
    const db = (await connectDB).db("forum");
    const result = await db.collection("post").updateOne(
      {_id: new ObjectId(req.body._id)},
      {$set: updateContent}
    )
    res.status(200).redirect("/list")
  }

}


// if(req.method === "PATCH") {
  //   const db = (await connectDB).db("forum")
  //   await db.collection("post").updateOne({
  //     _id: new ObjectId(result._id)
  //   }, 
  //     {$set: {
  //       title: result.title,
  //       content: result.content
  //     }
  //   })
  // }