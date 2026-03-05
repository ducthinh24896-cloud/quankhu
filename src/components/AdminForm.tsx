"use client"

import {useState} from "react"

export default function AdminForm(){

const [title,setTitle]=useState("")
const [content,setContent]=useState("")

function submit(){

alert("Đã đăng tin: "+title)

}

return(

<div className="max-w-xl mx-auto">

<h1 className="text-2xl font-bold mb-6">

Đăng bảng tin

</h1>

<input
className="border p-2 w-full mb-4"
placeholder="Tiêu đề"
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
className="border p-2 w-full mb-4"
placeholder="Nội dung"
onChange={(e)=>setContent(e.target.value)}
/>

<button
onClick={submit}
className="bg-green-700 text-white px-4 py-2 rounded"
>

Đăng

</button>

</div>

)

}