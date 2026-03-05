import {Player} from "../types/player"

type Props={

data:Player[]

}

export default function Leaderboard({data}:Props){

return(

<div className="max-w-xl mx-auto">

<h2 className="text-2xl font-bold mb-6">

🏆 Bảng xếp hạng

</h2>

<table className="w-full border">

<thead>

<tr className="bg-gray-200">

<th>Hạng</th>
<th>Tên</th>
<th>Đơn vị</th>
<th>Điểm</th>

</tr>

</thead>

<tbody>

{data.map((p,i)=>(

<tr key={p.id} className="text-center">

<td>{i+1}</td>
<td>{p.name}</td>
<td>{p.unit}</td>
<td>{p.score}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}