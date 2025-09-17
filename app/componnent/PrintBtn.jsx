'use client'

const PrintBtn = () => {


    function handlePrint() {
        window.print();
    }


    return (
        <button
            onClick={() => { handlePrint() }}
            className="px-4 py-2 bg-blue-600 text-white rounded w-fit cursor-pointer"
        >
            Print
        </button>
    )
}

export default PrintBtn;