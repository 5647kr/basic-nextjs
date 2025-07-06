import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";




export default async function Edit({params}) {
  const db = (await connectDB).db("forum");
  const { id } = await params;
  const result = await db.collection("post").findOne({ _id: new ObjectId(id)});

  // 수정기능
  // await db.collection("post").updateOne({
  //   수정할 게시물 정보
  // }, 
  //   {$set: {}
  // })

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <label htmlFor="">글 제목</label>
        <input type="text" name="title" defaultValue={result.title}/>
        <label htmlFor="">글 내용</label>
        <input type="text" name="content" defaultValue={result.content}/>
        <input style={{display: "none"}} type="text" name="_id" defaultValue={result._id.toString()}/>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
