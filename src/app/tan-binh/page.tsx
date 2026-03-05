import Link from "next/link"

export default function Page(){

return(

<div>

<h1 className="text-3xl font-bold mb-6">

Kiến thức tân binh

</h1>

<ul className="space-y-3">

<li>
<Link href="/tan-binh/gap-noi-vu">
Gấp nội vụ
</Link>
</li>

<li>
<Link href="/tan-binh/dieu-lenh">
Điều lệnh
</Link>
</li>

<li>
<Link href="/tan-binh/ky-luat">
Kỷ luật
</Link>
</li>

<li>
<Link href="/tan-binh/lich-sinh-hoat">
Lịch sinh hoạt
</Link>
</li>

</ul>

</div>

)

}