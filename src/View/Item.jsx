import React from 'react'
import { useNavigate } from "react-router-dom";
function Item() {

    const mockDocs = [
        {
            contract_id: "SPP1234",
            name: "Rungsuriya",
            loanAmountRaw: 800000,
            detail: "ไมเขาเงอนไขการขอสินเชื่อ",
        },
                {
            contract_id: "SPP1234",
            name: "Rungsuriya",
            loanAmountRaw: 800000,
            detail: "ไมเขาเงอนไขการขอสินเชื่อ",
        }
    ];
    const navigate = useNavigate();

    return (
        <div class="min-h-screen bg-gray-50">
            <div class="mx-auto max-w-6xl px-4 bg-white pt-20 min-h-215">

                <h1 className="text-lg "> รายการขอสินเชื่อ</h1>
                <hr className="my-3" />
                <div className="space-y-2">

                    {mockDocs.map((item) => (
                        <div onClick={() => navigate(`/View/${item.id}`)} className="rounded-md border border-gray-300 bg-white shadow-sm">
                            {/* Header */}
                            <div className="rounded-t-md bg-green-500  px-4 py-2 text-sm font-medium text-white ">
                               <p className="ml-1">DocNo. {item.contract_id}</p> 
                            </div>

                            {/* Body */}
                            <div className=" ml-2 mr-2 px-4 py-3">
                                <div className="  flex items-start items-center justify-between">

                                    {/* Left content */}
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <p><span className="font-medium">Requested:</span> {item.name}</p>
                                        <p><span className="font-medium">Monthly Income:</span> {item.loanAmountRaw}</p>
                                        <p><span className="font-medium">Loan Amount:</span> {item.loanAmountRaw}</p>
                                    </div>

                                    {/* Right center */}
                                    <h1 className="text-3xl mt-3 font-semibold text-green-500"> Approve </h1>


                                    {/* Right button */}
                                    <button onClick={() => navigate(`/View/${item.id}`)} className="mt-5  mr-1 rounded-md border px-4 py-1.5  text-sm hover:bg-gray-100">
                                        View
                                    </button>
                                </div>

                                {/* Divider */}
                                <hr className="my-3" />

                                {/* Detail */}
                                <p className="text-xs text-gray-600">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}


                </div>

            </div>


            <footer class="bg-gray-800 text-gray-300 mt-2">
                <div class="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between">
                    <p class="text-sm">
                        © 2026 Your Company. All rights reserved.
                    </p>

                    <div class="flex gap-4 text-sm mt-4 md:mt-0">
                        <a href="#" class="hover:text-white">Privacy</a>
                        <a href="#" class="hover:text-white">Terms</a>
                        <a href="#" class="hover:text-white">Contact</a>
                    </div>
                </div>
            </footer>


        </div>
    )
}
export default Item
