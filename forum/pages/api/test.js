// 서버 기능을 만드려면 누가 api/test로 get, post, put, delete, patch 요청하면 파일안 코드를 실행해줌

import { connectDB } from "@/util/db";

export default async function handler(req, res) {
  const result = req.body;
  console.log(req.query)
  console.log(result)
  if(req.method === "POST") {
    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne({ 
      //insertOne은 하나의 데이터를 MongoDB에 저장한다.
      title: result.title, 
      content: result.content
      // _id를 MongoDB에서 자동으로 생성하게 하고 싶으면 이렇게 _id는 비워두면 된다.
    })
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
  return res.status(200).json(result);
}


// 응답코드의 경우도 종류가 있다.
// 1. 서버기능 처리성공시: 200
// 2. 서버기능 처리실패시: 500
// 3. 서버기능 처리실패시(유저잘못): 400

// 숙제1. /api/list로 GET method 요청하면 db에 있던 post 컬렉션의 모든 데이터 보내주기 v
// 특정 url로 get요청을 하면 현재시간 보내주는 서버기능 만들어오기 v
// 글 발행기능 완성해오기

// 글작성 기능 만들기
// 1. 글 작성 페이지 필요
// 2. 글 작성 후 전송 버튼을 누르면 작성한 글 db에 저장
// 바로 db에 저장하면 위험함(공백, 코드 등을 확인해야함)
// 그래서 2번이 아닌 3번으로
// 3. 유저가 글을 서버로 보냄 서버는 글을 받으면 제대로 되었는지 검사를 하고 정상적이면 글을 db로 보내서 저장함

// 서버코드는 기능별로 url/method로 이루워져 있다.
// url은 url 작명하면 되는데 method는 종류가 있다.
// 1. get: 유저에게 데이터 전송시
// 2. post: 새로운 데이터 추가시
// 3. put: 데이터 수정시
// 4. delete: 데이터 삭제시
// 5. patch: 데이터 수정시

// next.js에서 서버 기능 개발할 경우 2가지 방법이 있다.
// 1. app폴더안에 api 폴더에서 개발 -> 미완이라 이거보단 root 폴더에 pages/api 폴더에서 개발하는것이 좋다.
// 2. root폴더에 pages/api 폴더에서 개발
