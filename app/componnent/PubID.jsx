const PubID = () => {
    return (
        <div className="bg-white border rounded shadow-sm overflow-x-auto">
            <div className="px-3 py-2 border-b font-semibold text-sm flex justify-between items-center gap-5">
                <span className="text-lg w-fit text-nowrap">Public ID:</span>
                <input type="number" placeholder="7290" className="border shadow-sm bg-gray-200 p-1 px-2 w-full text-lg rounded-sm" />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded w-fit cursor-pointer"
                >
                    Find
                </button>
            </div>
        </div>
    )
}

export default PubID;