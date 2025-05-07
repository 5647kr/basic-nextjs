// "use client"
import Link from "next/link";
import "./globals.css";
// import { useEffect, useState } from "react";

export default async function RootLayout({ children }) {
  // const [topics, setTopics] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:9999/topics")
  //   .then(response => response.json())
  //   .then(result => {
  //     setTopics(result)
  //   });
  // }, [])

  const response = await fetch("http://localhost:9999/topics");
  const topics = await response.json();
  
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB!</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}
                </Link>
              </li>
            )
          })}
          {/* <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li> */}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update
            </Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
