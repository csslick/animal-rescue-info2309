import { useParams } from "react-router-dom"

export default function Detail() {
  const params = useParams(); // url 파라미터 저장
  console.log(params)

  return (
    <main className="container">
      <h1>Detail</h1>
      <p>상품번호: {params.id}</p>
    </main>

  )
}
