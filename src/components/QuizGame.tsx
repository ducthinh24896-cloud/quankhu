"use client"

import { useState } from "react"
import { questions } from "../data/questions"

export default function QuizGame() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  function answer(i: number) {
    if (i === questions[index].answer) {
      setScore(score + 1)
    }

    setIndex(index + 1)
  }

  if (index >= questions.length) {
    return (
      <div className="text-center">
        <h2 className="text-2xl">Kết quả</h2>
        <p className="text-xl">Điểm: {score}</p>
      </div>
    )
  }

  const q = questions[index]

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl mb-4">{q.question}</h2>

      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => answer(i)}
            className="block w-full bg-green-600 text-white p-2 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}