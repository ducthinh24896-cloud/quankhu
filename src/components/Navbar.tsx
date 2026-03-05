import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex gap-6 text-sm font-bold">
      <Link href="/">Trang chủ</Link>
      <Link href="/thong-tin-quan-khu">Thông tin quân khu</Link>
      <Link href="/bang-tin">Bảng tin</Link>
      <Link href="/tan-binh">Tân binh cần nắm</Link>
      <Link href="/huan-luyen">Huấn luyện</Link>
      <Link href="/doi-song">Đời sống chiến sĩ</Link>
      <Link href="/thu-vien">Thư viện</Link>
      <Link href="/tro-choi">Trò chơi tân binh</Link>
    </nav>
  )
}