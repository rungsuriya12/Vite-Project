import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Item() {
const [result, setResult] = useState([]);

const decisionColor = {
  APPROVE: 'text-green-500',
  REJECTED: 'text-red-500',
  PENDING: 'text-yellow-500',
};

useEffect(() => {
  fetch("http://localhost:3000/api/loans")
    .then(res => res.json())
    .then(data => setResult(data))
    .catch(err => console.error(err));
}, []);
 

console.log(result);
  
    const navigate = useNavigate();

    return (
        <div class="min-h-screen bg-gray-50">
            <div class="mx-auto max-w-6xl px-4 bg-white pt-20 min-h-215">

                <h1 className="text-lg "> รายการขอสินเชื่อ</h1>
                <hr className="my-3" />
                <div className="space-y-2">

                    {result?.map(item => (
                        <div key={item.id}>
                        <div onClick={() => navigate(`/View/${item.id[0]}`)} className="rounded-md border border-gray-300 bg-white shadow-sm">
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
                                        <p><span className="font-medium">Monthly Income:</span> {item.monthly_income}</p>
                                        <p><span className="font-medium">Loan Amount:</span> {item.loan_amount}</p>
                                    </div>

                                    {/* Right center */}
                                    <h1 className={`text-3xl mt-3 font-semibold ${decisionColor[item.decision]}`}> {item.decision} </h1>


                                    {/* Right button */}
                                    <button onClick={() => navigate(`/View/${item.id[0]}`)} className="mt-5  mr-1 rounded-md border px-4 py-1.5  text-sm hover:bg-gray-100">
                                        View 
                                    </button>
                                </div>

                                {/* Divider */}
                                <hr className="my-3" />

                                {/* Detail */}
                                <p className="text-xs text-gray-600">
                                    {item.reason_codes}
                                </p>
                            </div>
                        </div>
                         </div>
                   ))}


                </div>

            </div>


        </div>
    )
}
export default Item
