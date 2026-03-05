"use client"

import {useState} from "react"
import {questions} from "../data/questions"

export default function QuizGame(){

const [index,setIndex] = useState(0)
const [score,setScore] = useState(0)

function answer(i:number){

if(i===questions[index].answer){
setScore(score+1)
}

setIndex(index+1)
}

if(index>=questions.length){

return(
<div className="text-center">

<h2 className="text-3xl font-bold">
Hoàn thành nhiệm vụ 🪖
</h2>

<p className="text-xl mt-4">
Điểm: {score}
</p>

</div>
)
}

const q = questions[index]

return(

<div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

<h2 className="text-xl mb-4">
{q.question}
</h2>

<div className="grid gap-3">

{q.options.map((opt,i)=>(

<button
key={i}
onClick={()=>answer(i)}
className="bg-army text-white p-3 rounded-lg hover:bg-darkarmy"
>

{opt}

</button>

))}

</div>

</div>

)

}