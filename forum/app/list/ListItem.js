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
            <button>삭제</button>
            {/* <DetailLink /> */}
          </li>
        );
      })}
    </>
  );
}
