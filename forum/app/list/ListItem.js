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

            {/* fetch 방법1 */}
            {/* <span onClick={(e) => {
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
            }}>삭제</span> */}

            {/* fetch 방법2 */}
            <span onClick={(e) => {
              fetch("api/test?name=kim&age=20")
            }}>삭제</span>











            {/* <DetailLink /> */}
          </li>
        );
      })}
    </>
  );
}
