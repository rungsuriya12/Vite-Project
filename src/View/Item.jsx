import React from 'react'
import { useNavigate } from "react-router-dom";
function Item() {

    const mockDocs = [
        {
            id: 1,
            docNo: "15-20250117",
            requester: "Rungsuriya",
            reason: "สั่งซื้ออุปกรณ์สำนักงาน",
            price: 800000,
            detail: "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise 1",
        },
        {
            id: 2,
            docNo: "15-20250118",
            requester: "Somchai",
            reason: "ซ่อมบำรุงระบบ",
            price: 120000,
            detail: "รายละเอียดเอกสารรายการที่ 2",
        },
        {
            id: 3,
            docNo: "15-20250119",
            requester: "Somsri",
            reason: "จัดซื้อซอฟต์แวร์",
            price: 45000,
            detail: "รายละเอียดเอกสารรายการที่ 3",
        },
    ];
    const navigate = useNavigate();

    return (
        <div class="min-h-screen bg-gray-50">
            <div class="mx-auto max-w-6xl px-4 bg-white pt-20 min-h-screen">

                   <h1 className="text-lg "> Appication For Request Training</h1> <br />
                <div className="space-y-2">

                    {mockDocs.map((item) => (
                        <div onClick={() => navigate(`/View/${item.id}`)} className="rounded-md border border-gray-300 bg-white shadow-sm">
                            {/* Header */}
                            <div className="rounded-t-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white ">
                                DocNo. {item.docNo}
                            </div>

                            {/* Body */}
                            <div className="px-4 py-3">
                                <div className="flex items-start justify-between">

                                    {/* Left content */}
                                    <div className="space-y-1 text-sm text-gray-700">
                                        <p><span className="font-medium">Requested:</span> {item.requester}</p>
                                        <p><span className="font-medium">Reason:</span> {item.reason}</p>
                                        <p><span className="font-medium">Price:</span> {item.price}</p>
                                    </div>

                                    {/* Right button */}
                                    <button onClick={() => navigate(`/View/${item.id}`)} className="mt-5 rounded-md border px-4 py-1.5 text-sm hover:bg-gray-100">
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
