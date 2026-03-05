"use client"

import Link from "next/link"
import { useState } from "react"

import {
Home,
Newspaper,
Gamepad2,
Trophy,
UserCog,
Menu
} from "lucide-react"

export default function Navbar(){

const [open,setOpen] = useState(false)

const menu = [

{
name:"Trang chủ",
href:"/",
icon:Home
},

{
name:"Bảng tin",
href:"/bang-tin",
icon:Newspaper
},

{
name:"Tân binh",
href:"/tan-binh",
icon:Gamepad2
},

{
name:"Trò chơi",
href:"/tro-choi",
icon:Gamepad2
},

{
name:"Xếp hạng",
href:"/leaderboard",
icon:Trophy
},

{
name:"Admin",
href:"/admin",
icon:UserCog
}

]

return(

<nav className="bg-gradient-to-r from-red-700 to-orange-500 text-white shadow-lg">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">

<h1 className="font-bold text-xl flex items-center gap-2">

🪖 Tân Binh Portal

</h1>

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>
<Menu/>
</button>

<div className="hidden md:flex gap-6">

{menu.map((item,i)=>{

const Icon=item.icon

return(

<Link
key={i}
href={item.href}
className="flex items-center gap-2 hover:text-yellow-300 transition"
>

<Icon size={18}/>

{item.name}

</Link>

)

})}

</div>

</div>

{open &&(

<div className="md:hidden flex flex-col p-4 gap-3 bg-green-600">

{menu.map((item,i)=>{

const Icon=item.icon

return(

<Link
key={i}
href={item.href}
className="flex items-center gap-2"
>

<Icon size={18}/>
{item.name}

</Link>

)

})}

</div>

)}

</nav>

)

}