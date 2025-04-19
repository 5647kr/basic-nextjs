"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DetailedLink() {
  let router = useRouter()
  return (
    <div>
      {/* <button onClick={() => {router.push("/")}}>홈</button>
      <button onClick={() => {router.back()}}>이전</button>
      <button onClick={() => {router.forward()}}>앞으로</button>
      <button onClick={() => {router.refresh()}}>새로고침</button> */}

      {/* 미리 페이지 로드 */}
      {/* <button onClick={() => {router.prefetch("/list")}}>새로고침</button> */}
    </div>
  )
}
