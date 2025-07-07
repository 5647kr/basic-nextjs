"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      {result.map((item) => {
        return (
          <li className="list-item" key={item._id}>
            <Link href={`detail/${item._id}`}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>1월 1일</p>
            </Link>
            <Link href={`/edit/${item._id}`}>수정</Link>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: item._id,
                })
                  // ajax 요청 완료시 코드 실행시 then을 사용
                  .then((r) => {
                    return r.json();
                  })
                  // 삭제 후 애니메이션 추가
                  .then(() => {
                    e.target.parentElement.style.opacity = 0
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none"
                    }, 1000)
                  });
              }}
            >
              삭제
            </span>
          </li>
        );
      })}
    </>
  );
}

{
  /* fetch 방법1 */
}
{
  /* <span onClick={(e) => {
  fetch("/api/post/delete", {
    method: "DELETE",
    body: item._id
  }).then((r) => r.json())
  .then(() => {
    e.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 1000)
  })
}}>삭제</span> */
}

{/* fetch 방법2 -> api/etc/test */}
// <span onClick={(e) => {
//   fetch("api/etc/test?name=kim&age=20")
// }}>삭제</span>

{/* fetch 방법3 -> api/etc/[test2] */}
// fetch("api/etc/kim)
// kim 데이터 출력됨


{/* ajax를 이용한 에러 처리 */}
// fetch('/URL')
// .then((r)=>{
//   if(r.status == 200) {
//     return r.json()
//   } else {
//     //서버가 에러코드전송시 실행할코드
//   }
// })
// .then((result)=>{ 
//   //성공시 실행할코드
// }).catch((error)=>{
//   //인터넷문제 등으로 실패시 실행할코드
//   console.log(error)
// })
