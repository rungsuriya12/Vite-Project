import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddItem() {
    const navigate = useNavigate();
    const resetForm = () => {
        setCustomerId("");
        setIdCard("");
        setName("");
        setLastname("");
        setLoanAmount("");
        setLoanAmountRaw(0);
        setMonthlyIncome("");
        setMonthlyIncomeRaw(0);
        setErrors({});
    };

    const [customerId, setCustomerId] = useState("");
    const [idCard, setIdCard] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [errors, setErrors] = useState({});
    const [monthlyIncome, setMonthlyIncome] = useState("");   // แสดงผล: 10,000
    const [monthlyIncomeRaw, setMonthlyIncomeRaw] = useState(0); // ค่าจริง: 10000
    const [loanAmount, setLoanAmount] = useState("");   // แสดงผล: 10,000
    const [loanAmountRaw, setLoanAmountRaw] = useState(0); // ค่าจริง: 10000

    const handleNumberWithComma = (e, setRaw, setDisplay) => {//รับค่าจาก even value 2 
        const input = e.target.value;
        const raw = input.replace(/,/g, "");

        if (!/^\d*$/.test(raw)) return;

        setRaw(raw === "" ? 0 : Number(raw));
        setDisplay(raw === "" ? "" : Number(raw).toLocaleString("en-US"));
    };


    //เกณการอนุมัติ
    const isPassed = loanAmountRaw <= monthlyIncomeRaw * 4;
    const amountMaxDisplay = (monthlyIncomeRaw * 4).toLocaleString("en-US");

    const Submit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (customerId.length !== 6) {
            newErrors.customerId = true;
        }

        if (idCard.length !== 13) {
            newErrors.idCard = true;
        }

        setErrors(newErrors);

        // ❌ มี error → หยุด
        if (Object.keys(newErrors).length > 0) return;

        // ส่งข้อมูลไปยัง backend
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "user_id": customerId,
            "citizen_id": idCard,
            "name": name,
            "lastname": lastname,
            "monthly_income": monthlyIncomeRaw,
            "loan_amount": loanAmountRaw
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/loans", requestOptions)
            .then(async (response) => {
                if (response.status === 409) {
                    // ข้อมูลซ้ำ
                    throw new Error("DUPLICATE");
                }

                if (!response.ok) {
                    // error อื่น ๆ
                    throw new Error("SERVER_ERROR");
                }

                return response.json();
            })
            .then(result => {
                alert("สมัครสินเชื่อเรียบร้อยแล้ว");
                resetForm();
                navigate('/item');
            })
            .catch(err => {
                console.error(err);

                if (err.message === "DUPLICATE") {
                    alert("ข้อมูลซ้ำ ไม่สามารถบันทึกได้");
                }
            });


    };


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-6xl p-8 bg-white pt-20 min-h-screen ">
                <div>
                    <h1 className="text-lg "> สมัครขอสินเชื่อ</h1>
                    <p className="text-sm text-gray-700"> กรอกข้อมูลเพื่อสมัครขอสินเชื่อ</p>
                    <hr className="my-3" />


                    <div>
                        <form className="grid grid-cols-2 gap-2" onSubmit={Submit}>

                            <div className=" col-span-2 ">
                                <label className="text-sm font-medium text-gray-700 ">
                                    รหัสลูกค้า
                                </label>
                                <input
                                    value={customerId}
                                    onChange={(e) => setCustomerId(e.target.value.replace(/\D/g, ""))}
                                    type="text"
                                    placeholder=""
                                    maxLength="6"
                                    required
                                    className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${errors.customerId ? "border-red-500" : "border-gray-300"}`}
                                />
                                <label className={`text-xs font-medium  ${errors.customerId ? "text-red-500" : "text-gray-500"}`}>
                                    รหัสลูกค้า 6 หลัก (ตัวอย่าง: 000001)
                                </label>
                            </div>

                            <div className="col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                    เลขบัตรประชาชน
                                </label>
                                <input
                                    value={idCard}
                                    onChange={(e) => setIdCard(e.target.value.replace(/\D/g, ""))}
                                    type="text"
                                    placeholder=""
                                    maxLength="13"
                                    required
                                    className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${errors.idCard ? "border-red-500" : "border-gray-300"}`}
                                />
                                <label className={`text-xs font-medium ${errors.idCard ? "text-red-500" : "text-gray-500"}`}>
                                    เลขบัตรประชาชน 13 หลัก
                                </label>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">
                                    ชื่อ
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value.replace(/[^a-zA-Zก-๙]/g, ""))}
                                    name="firstName"
                                    placeholder="กรอกชื่อ"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-sm  border-gray-300" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">
                                    สกุล
                                </label>
                                <input
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value.replace(/[^a-zA-Zก-๙]/g, ""))}
                                    name="lastName"
                                    placeholder="กรอกนามสกุล"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-sm  border-gray-300" />
                            </div>
                            <div className=" col-span-2 ">
                                <label className=" text-sm font-medium text-gray-700">
                                    รายได้ต่อเดือน (บาท)
                                </label>
                                <input
                                    type="text"
                                    placeholder="0"
                                    value={monthlyIncome}
                                    onChange={(e) =>
                                        handleNumberWithComma(e, setMonthlyIncomeRaw, setMonthlyIncome)
                                    }
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-base  border-gray-300" />
                                <label className="text-xs font-medium text-gray-500">
                                    รายได้ต่อเดือนของคุณ (บาท)
                                </label>
                            </div>

                            <div className=" col-span-2 ">
                                <label className=" text-sm font-medium text-gray-700">
                                    วงเงินที่ขอกู้ (บาท)
                                </label>
                                <input
                                    tppe="text"
                                    value={loanAmount}
                                    onChange={(e) =>
                                        handleNumberWithComma(e, setLoanAmountRaw, setLoanAmount)
                                    }
                                    placeholder="0"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-base  border-gray-300" />
                                <label className="text-xs font-medium text-gray-500">
                                    วงเงินกู้สูงสุด: กรุณากรอกรายได้ก่อน
                                </label>
                            </div>

                            <div className="col-span-2 mt-4">
                                {/* กล่องสรุปผล */}
                                <div className="rounded-md border border-red-300 bg-red-50 p-4">
                                    <h3 className="mb-3 font-semibold text-sm">
                                        ข้อมูลสรุปการขอสินเชื่อ
                                    </h3>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b pb-1">
                                            <span>รายได้ต่อเดือน (บาท)</span>
                                            <span className="font-medium" >{monthlyIncome} บาท</span>
                                        </div>

                                        <div className="flex justify-between border-b pb-1">
                                            <span>วงเงินกู้ที่ขอ</span>
                                            <span className="font-medium">{loanAmount} บาท</span>
                                        </div>

                                        <div className="flex justify-between border-b pb-1">
                                            <span>วงเงินสูงสุดที่อนุมัติได้</span>
                                            <span className="font-medium">{amountMaxDisplay} บาท</span>
                                        </div>

                                        <div className="flex justify-between pt-2">
                                            <span className="font-medium">สถานะ:</span>
                                            <span
                                                className={`flex items-center gap-1 font-medium ${isPassed ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >  {isPassed
                                                ? "✅ ผ่านเกณฑ์การพิจารณา"
                                                : "❌ ไม่ผ่านเกณฑ์การพิจารณา"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* กล่องหมายเหตุ */}
                                <div className=" mt-4 flex items-start gap-2 rounded-md bg-gray-100 p-3 border-l-4 border-green-500">
                                    <span className="text-sm font-medium">หมายเหตุ:</span>
                                    <span className="text-sm text-gray-700">
                                        วงเงินกู้อยู่ภายใต้เกณฑ์ 4 เท่าของรายได้ต่อเดือน
                                    </span>
                                </div>
                            </div>

                            <div className="col-span-2 mt-4">
                                <div className="flex gap-2">
                                    <button type="button"
                                        onClick={resetForm} className="w-full rounded-md border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-100" >
                                        ล้างข้อมูล
                                    </button>
                                    <button disabled={!isPassed} type="submit" className={`w-full rounded-md py-3 text-sm font-medium ${isPassed ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                    >
                                        ยืนยัน
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddItem