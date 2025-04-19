import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailedLink from "./DetailedLink";





export default async function List() {
  const db = (await connectDB).db("noticeboard");
  let result = await db.collection("post").find().toArray();


  return (
    <div className="list-bg">
      <ul>
        {result.map((item, index) => {
          return (
            <li className="list-item" key={index}>
              {/* Link에도 preFetch 기능이 있다. 끄고 싶으면 prefetch=false로 설정할 수 있다. */}
              <Link href={`./detail/${item._id}`}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>1월 1일</p>
              </Link>
              <DetailedLink />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
