import React from 'react'

function AddItem() {
    return (
        <div class="mx-auto max-w-6xl px-4 bg-white pt-20 min-h-screen">
            <h1 className="text-lg "> Appication For Request Training</h1> <br />
            <h5 className="text-sm "> Setion 1  Detailed Information</h5>
            <hr className="my-3" />

            <div className="grid grid-cols-4 gap-4">

                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        ชื่อ
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        ชื่อ
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        ชื่อ
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        ชื่อ
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        ชื่อ
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                
            </div>

        </div>
    )
}

export default AddItem