"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  // let path = usePathname();
  // let params = useSearchParams();

  // console.log("router: ", router);
  // console.log("path: ", path);
  // console.log("params: ", params);
  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼
    </button>
  );
}

// router 속성
// 1. push: 해당 페이지로 이동
// 2. back: 뒤로가기
// 3. forward: 앞으로 가기
// 4. refresh: 새로고침 -> 변동 사항이 있는 부분만 바꿔주는 새로고침
// 5. prefetch: 미리로드

// 링크 태그에도 prefetch기능을 내장하고 있다.