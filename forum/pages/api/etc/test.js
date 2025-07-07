export default function handler(req, res) {
  console.log(res.query)
  return res.status(200).json();
}
