"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch("http://localhost:9999/topics/" + id)
      .then((response) => response.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + `topics/`+ id, options)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          const lastId = result.id;
          router.refresh();
          router.push(`/read/${lastId}`)
        });

      }}
    >
      <h2>Create</h2>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
