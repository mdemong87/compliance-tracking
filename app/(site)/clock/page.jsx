import PrintBtn from "../../componnent/PrintBtn";

const Clock = () => {
    return (
        <main className="p-4 flex-1 overflow-auto space-y-6">

            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-4">
                    <span className="text-lg w-fit text-nowrap">Period:</span>
                    <input type="number" placeholder="3" className="border shadow-sm bg-gray-200 p-1 px-2 w-full text-lg rounded-sm" />
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded w-fit cursor-pointer"
                    >
                        Export
                    </button>
                    <PrintBtn />
                </div>
            </div>

            <div className="bg-white border rounded shadow-sm overflow-x-auto">
                <div className="px-3 py-2 border-b font-semibold text-sm">Clock in Compliance</div>
                <table className="w-full text-sm min-w-[600px]">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-3 py-2 text-left">Manager Name</th>
                            <th className="px-3 py-2 text-left">22/09/2025</th>
                            <th className="px-3 py-2 text-left">22/09/2025</th>
                            <th className="px-3 py-2 text-left">22/09/2025</th>
                            <th className="px-3 py-2 text-left">22/09/2025</th>
                            <th className="px-3 py-2 text-left">22/09/2025</th>
                            <th className="px-3 py-2 text-left">Total</th>
                            <th className="px-3 py-2 text-left">Individual Grading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 25 }).map((_, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">Jhon Deo</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">100%</td>
                                <td className="px-3 py-2">A+</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default Clock;