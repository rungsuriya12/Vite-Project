import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* Test Version git 2 */}
<div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
  <div class="max-w-4xl w-full bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-10">
    
 
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Build Beautiful UI
      </h1>
      <p class="text-gray-600 text-lg">
        Tailwind CSS + Vite = เร็ว แรง และสวย ✨
      </p>
    </div>


    <div class="grid md:grid-cols-3 gap-6 mb-12">
      <div class="p-6 rounded-xl bg-indigo-50 hover:scale-105 transition">
        <h3 class="text-xl font-bold text-indigo-600 mb-2">Fast</h3>
        <p class="text-gray-600 text-sm">
          Dev server เร็ว เปิดปุ๊บติดปั๊บ
        </p>
      </div>

      <div class="p-6 rounded-xl bg-purple-50 hover:scale-105 transition">
        <h3 class="text-xl font-bold text-purple-600 mb-2">Utility First</h3>
        <p class="text-gray-600 text-sm">
          เขียน CSS โดยไม่ต้องออกจากไฟล์
        </p>
      </div>

      <div class="p-6 rounded-xl bg-pink-50 hover:scale-105 transition">
        <h3 class="text-xl font-bold text-pink-600 mb-2">Responsive</h3>
        <p class="text-gray-600 text-sm">
          มือถือ แท็บเล็ต เดสก์ท็อป สวยหมด
        </p>
      </div>
    </div>

  
    <div class="text-center">
      <button class="px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition shadow-lg">
        Get Started
      </button>
    </div>

  </div>
</div>

    </>

  )
}

export default App
