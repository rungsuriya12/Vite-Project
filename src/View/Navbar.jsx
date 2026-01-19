import React from 'react'

export default function Navbar() {
  return (
    <>
    
<nav class="fixed top-0 left-0 w-full h-16 z-50 bg-green-500 border-b border-white/10">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center  sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          <img src="Logo.png" alt="" class="h-12 w-auto" />
        </div>
        
        <div class="hidden sm:block mx-auto">
          <div class="flex space-x-4">

            <a href="/Item"  class="rounded-md  pt-4 px-3 py-2 text-sm font-medium text-white  hover:bg-white/5">อัตราดอกเบี้ยและค่าธรรมเนียม</a>
            <a href="/AddItem" class="rounded-md  pt-4 px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">สมัครขอสินเชื่อ</a>
            <a href="#" class="rounded-md px-3 py-2  pt-4 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">โปรโมชั่นและข่าวสาร</a>
            <a href="#" class="rounded-md px-3 py-2 pt-4 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">เพิ่มเติม</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    <a href="/Item" aria-current="page" class="rounded-md  px-3 py-2 text-xl font-medium text-white">ติดต่อ</a>


      
      </div>
    </div>
  </div>
</nav>


</>

  )
}
