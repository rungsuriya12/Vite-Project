import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function View() {

    const [Approval, setApproval] = useState(null);
    const navigate = useNavigate();
    const [result, setResult] = useState(null);
    const { id } = useParams();
    const [approved_amount, setApprovedAmount] = useState("");
    const [reason_codes, setReasonCodes] = useState("");
    const [Statuss, setStatuss] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [idCard, setIdCard] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [MonthlyIncomeRaw, setMonthlyIncomeRaw] = useState("");
    const [MonthlyIncome, setMonthlyIncome] = useState("");
    const [errors, setErrors] = useState({});
    const [loanAmountRaw, setloanAmountRaw] = useState(0);
    const [loanAmount, setloanAmount] = useState("");
    const [Detail, setDetail] = useState("");
    
    const formatNumber = (num) => {
        return Number(num).toLocaleString("en-US");
    };
    
    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:3000/api/loans/${id}`)
            .then(res => res.json())
            .then(result => setResult(result))
            .catch(err => console.error(err));
    }, [id]);
    //console.log(result);

    useEffect(() => {
        if (!result) return;

        setCustomerId(result.user_id);
        setIdCard(result.citizen_id);
        setName(result.name);
        setLastname(result.lastname);
        setloanAmountRaw(Number(result.loan_amount) || 0);
        setMonthlyIncomeRaw(Number(result.monthly_income) || 0);
        setloanAmount(formatNumber(result.loan_amount));
        setMonthlyIncome(formatNumber(result.monthly_income));
        setStatuss(result.decision);
        setApprovedAmount(result.approved_amount);
        setReasonCodes(result.reason_codes);
    }, [result]);

    const Submit = (e) => {
        e.preventDefault();      // กันหน้า refresh
        fetch(`http://localhost:3000/api/loans/${result.id[0]}`, requestOptions)
            .then((response) => response.json())
            .then(result => {
                alert(Approval === 'APPROVE' ? "อนุมัติสินเชื่อสำเร็จ" : "ปฏิเสธสินเชื่อสำเร็จ")
                navigate('/item')
            })
            .catch(err => {
                console.error(err)
                alert(err.message)
            })
    };


    const [loanApprove, setLoanApprove] = useState(0);
    const [DisplayloanApprove, setDisplayLoanApprove] = useState();




    const handleNumberWithComma = (e, setRaw, setDisplay) => {//รับค่าจาก even value 2 
        const input = e.target.value;
        const raw = input.replace(/,/g, "");

        if (!/^\d*$/.test(raw)) return;

        setRaw(raw === "" ? 0 : Number(raw));
        setDisplay(raw === "" ? "" : Number(raw).toLocaleString("en-US"));
    };


    //เกณการอนุมัติ

    const isPassed = loanApprove <= MonthlyIncomeRaw * 3;
    const maxloanApprove = (MonthlyIncomeRaw * 3).toLocaleString("en-US");
    const amountMaxDisplay = (MonthlyIncomeRaw * 4).toLocaleString("en-US");

    return (
        <div class="min-h-screen bg-gray-50">
            <div class="mx-auto max-w-6xl p-8 bg-white pt-20 min-h-screen ">
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
                                    disabled
                                    value={customerId}
                                    
                                    type="text"
                                    placeholder=""
                                    maxLength="6"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-sm  border-gray-300" />

                                <label className={`text-xs font-medium  ${errors.customerId ? "text-red-500" : "text-gray-500"}`}>
                                    รหัสลูกค้า 6 หลัก (ตัวอย่าง: 000001)
                                </label>
                            </div>

                            <div className="col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                    เลขบัตรประชาชน
                                </label>
                                <input
                                    disabled
                                    value={idCard}
                                    
                                    type="text"
                                    placeholder=""
                                    maxLength="13"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-sm  border-gray-300" />

                                <label className={`text-xs font-medium ${errors.idCard ? "text-red-500" : "text-gray-500"}`}>
                                    เลขบัตรประชาชน 13 หลัก
                                </label>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">
                                    ชื่อ
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    value={name}
                                   
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
                                    disabled
                                    type="text"
                                    value={lastname}
                                   
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
                                    disabled
                                    type="text"
                                    placeholder="0"
                                    value={MonthlyIncome}
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
                                    disabled
                                    type="text"
                                    value={loanAmount}
                                    placeholder="0"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-base  border-gray-300" />

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
                                            <span className="font-medium" >{MonthlyIncome} บาท</span>
                                        </div>

                                        <div className="flex justify-between border-b pb-1">
                                            <span>วงเงินกู้ที่ขอ</span>
                                            <span className="font-medium">{loanAmount} บาท</span>
                                        </div>

                                        <div className="flex justify-between border-b pb-1">
                                            <span>วงเงินสูงสุดที่อนุมัติได้</span>
                                            <span className="font-medium">{amountMaxDisplay} บาท</span>
                                        </div>

                                        <div className="flex justify-between border-b pb-1">
                                            <span>วงเงินที่อนุมัติ</span>
                                            <span className="font-medium">{Statuss !== 'PENDING' ? approved_amount : DisplayloanApprove} บาท</span>
                                        </div>


                                        <div className="flex justify-between pt-2">
                                            <span className="font-medium">สถานะ:</span>


                                            <span style={{ display: Statuss == 'PENDING' ? 'block' : 'none' }}
                                                className={`flex items-center gap-1 font-medium ${isPassed ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >  {isPassed
                                                ? "✅ ผ่านเกณฑ์การพิจารณา"
                                                : "❌ ไม่ผ่านเกณฑ์การพิจารณา"}
                                            </span>

                                            <span style={{ display: Statuss !== 'PENDING' ? 'block' : 'none' }}
                                                className={`flex items-center gap-1 font-medium ${Statuss == 'APPROVE' ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {Statuss}

                                            </span>



                                        </div>
                                    </div>
                                </div>

                                {/* กล่องหมายเหตุ */}
                                <div className=" mt-4 flex items-start gap-2 rounded-md bg-gray-100 p-3 border-l-4 border-green-500">
                                    <span className="text-sm font-medium">หมายเหตุ:</span>
                                    <span className="text-sm text-gray-700">
                                        วงเงินกู้อยู่ภายใต้เกณฑ์ไม่เกิน 3 เท่าของรายได้ต่อเดือน
                                    </span>
                                </div>
                            </div>

                            <div className=" col-span-2 mt-4">
                                <label className=" text-sm font-medium text-gray-700">
                                    วงเงินที่อนุมัติ
                                </label>
                                <input
                                    disabled={Statuss !== 'PENDING'}
                                    type="text"
                                    value={Statuss !== 'PENDING' ? approved_amount : DisplayloanApprove}
                                    onChange={(e) =>
                                        handleNumberWithComma(e, setLoanApprove, setDisplayLoanApprove)
                                    }
                                    placeholder="0"
                                    required
                                    className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${!isPassed ? "border-red-500" : "border-gray-300"}`} />


                            </div>

                            <div className=" col-span-2">
                                <label className=" text-sm font-medium text-gray-700">
                                    รายละเอียดการอนุมัติ
                                </label>
                                <input
                                    disabled={Statuss !== 'PENDING'}
                                    type="text"
                                    value={Statuss !== 'PENDING' ? reason_codes : Detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    placeholder="ระบุรายละเอียด"
                                    required
                                    className="mt-2 w-full rounded-md border px-3 py-2 text-base  border-gray-300" />

                            </div>


                            <div className="col-span-2 mt-4" style={{ display: Statuss == 'PENDING' ? 'block' : 'none' }}>
                                <div className="flex gap-2">
                                    <button onClick={() => { setApproval('APPROVE'); Submit() }} disabled={!isPassed} type="submit" className={`w-full rounded-md py-3 text-sm font-medium ${isPassed ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                    >
                                        APPROVE
                                    </button>
                                    <button type="submit" onClick={() => setApproval('REJECTED')} className="w-full rounded-md border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-100" >
                                        REJECTED
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="col-span-2 mt-4" style={{ display: Statuss !== 'PENDING' ? 'block' : 'none' }}>
                            <div className="flex gap-2">

                                <button onClick={() => navigate('/Item')} className="w-full rounded-md border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-100" >
                                    กลับ
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default View