import React from 'react'

export default function Navbar() {
  return (
    <>
    
<nav className="fixed top-0 left-0 w-full h-16 z-50 bg-green-500 border-b border-white/10">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="Logo.png" alt="" className="h-12 w-auto" />
        </div>

        <div className="hidden sm:block mx-auto">
          <div className="flex space-x-4">
            <a href="/Item"  className="rounded-md  pt-4 px-3 py-2 text-sm font-medium text-white  hover:bg-white/5">อัตราดอกเบี้ยและค่าธรรมเนียม</a>
            <a href="/AddItem" className="rounded-md  pt-4 px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">สมัครขอสินเชื่อ</a>
            <a href="#" className="rounded-md px-3 py-2  pt-4 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">โปรโมชั่นและข่าวสาร</a>
            <a href="#" className="rounded-md px-3 py-2 pt-4 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white">เพิ่มเติม</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    <a href="/Item" aria-current="page" className="rounded-md  px-3 py-2 text-xl font-medium text-white">ติดต่อ</a>


      
      </div>
    </div>
  </div>
</nav>


</>

  )
}
