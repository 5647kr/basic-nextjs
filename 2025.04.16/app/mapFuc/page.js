export default function mapFuc() {
  const code = `
  let arr = [2, 3, 4];
  let newArr = arr.map((element, index) => {
    console.log(element, index)
    return 10;
  })
  console.log(newArr);
  `

  return (
    <div>
      <h1>map 함수</h1>
      <code>
        <pre>{code}</pre>
      </code>
    </div>
  )
}
