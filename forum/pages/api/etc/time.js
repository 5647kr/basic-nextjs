export default function Time(요청, 응답) {
  const newDate = new Date();
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const sec = newDate.getSeconds();
  return 응답.status(200).json(`${hour}: ${min}: ${sec}`)
}
