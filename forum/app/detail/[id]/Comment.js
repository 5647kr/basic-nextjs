"use client"

import { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");
  return (
    <div>
      <div>댓글 목록</div>
      <input type="text" onChange={(e) => {
        setComment(e.target.value)
      }}
      />
      <button onClick={() => {
        fetch("/url", {method: "POST", body: comment})
      }}>댓글 전송</button>
    </div>
  );
}
