export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-green-700">
        CỔNG THÔNG TIN TÂN BINH
      </h1>

      <p className="mt-4 text-lg">
        Nơi cung cấp kiến thức cho chiến sĩ trẻ
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded-xl">
          🪖 Kiến thức quân sự
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          📢 Tin tức đơn vị
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          🎮 Trò chơi ôn luyện tập
        </div>
      </div>
    </div>
  )
}