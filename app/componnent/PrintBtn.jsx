'use client'

import { FaPrint } from "react-icons/fa6";

const PrintBtn = () => {


    function handlePrint() {
        window.print();
    }


    return (
        <button
            onClick={() => { handlePrint() }}
            className="px-4 py-2 bg-blue-600 text-white rounded w-fit cursor-pointer flex items-center gap-2"
        >
            <FaPrint />
            Print
        </button>
    )
}

export default PrintBtn;