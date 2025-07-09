import { connectDB } from "@/util/db";
import Link from "next/link";
import ListItem from "./ListItem";
// import DetailLink from "./DetailLink";


// 해당 코드는 static rendering을 dynamic rendering으로 바꿔주는 코드이다.
export const dynamic = "force-dynamic" 

// dynamic 단점: 매번 새로 html페이지를 그려야 해서 서버/DB 부담이 커진다. 이를 캐싱기능을 사용해 보안할 수 있다.

// 캐싱이란 결과를 잠깐 저장해두고 재사용하는것을 의미한다.
// 페이지 캐싱이란 페이지 완성본을 잠깐 저장해두고 재사용

// 해당 코드는 dynamic rendering을 static rendering으로 바꿔주는 코드이다.
// export const dynamic = "force-static"

// 이 코드를 사용시 해당 파일을 60초마다 캐싱하는 기능을 사용할 수 있게 도와준다.
// export const revalidate = 60;



export default async function List() {
  const db = (await connectDB).db("forum");
  const data = await db.collection("post").find().toArray();

  // Get 요청 결과를 캐싱하여 서버 부담을 줄여본다.
  // 아래 두가지 방법 모두 캐싱으로 사용 가능하다.
  // 1. await fetch("/url", {cache: "force-cache"})
  // 2. await fetch("/url")

  const result = data.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <ul className="list-bg">
      <ListItem result={result}/>
    </ul>
  );
}


  // 글 목록 조회 기능1
  // return (
  //   <ul className="list-bg">
  //     <li className="list-item">
  //       <h4>글 제목</h4>
  //       <p>1월 1일</p>
  //     </li>
  //     <li className="list-item">
  //       <h4>글 제목</h4>
  //       <p>1월 1일</p>
  //     </li>
  //   </ul>
  // );


  // 글 목록 조회 기능2
  // return (
  //   <ul className="list-bg">
  //     {result.map((item) => {
  //       console.log(item._id)
  //       return (
  //         <li className="list-item" key={item._id}>
  //           <Link href={`/detail/${item._id}`}>
  //             <h4>{item.title}</h4>
  //             <p>{item.content}</p>
  //             <p>1월 1일</p>
  //           </Link>
  //           <Link href={`/edit/${item._id}`}>수정</Link>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );


  // 글 목록 조회 기능3
  // return (
  //   <ul className="list-bg">
  //     {result.map((item) => {
  //       console.log(item._id)
  //       return (
  //         <li className="list-item" key={item._id}>
  //           <Link href={`/detail/${item._id.toString()}`}>
  //             <h4>{item.title}</h4>
  //             <p>{item.content}</p>
  //             <p>1월 1일</p>
  //           </Link>
  //           <Link href={`/edit/${item._id.toString()}`}>수정</Link>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );

