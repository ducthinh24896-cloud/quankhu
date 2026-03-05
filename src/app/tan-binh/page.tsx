import Link from "next/link"

export default function TanBinh() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Kiến thức tân binh
      </h1>

      <ul className="space-y-3">
        <li>
          <Link href="/tan-binh/gap-noi-vu">Gấp nội vụ</Link>
        </li>

        <li>
          <Link href="/tan-binh/dieu-lenh">Điều lệnh đội ngũ</Link>
        </li>

        <li>
          <Link href="/tan-binh/ky-luat">Kỷ luật quân đội</Link>
        </li>

        <li>
          <Link href="/tan-binh/lich-sinh-hoat">Lịch sinh hoạt</Link>
        </li>
      </ul>
    </div>
  )
}