import PrintBtn from "@/app/componnent/PrintBtn";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaLayerGroup } from "react-icons/fa";
import { PiArrowsDownUpBold } from "react-icons/pi";

const Clock = () => {
    return (
        <main className="p-4 flex-1 overflow-auto space-y-6 z-40">

            <div className="bg-white border rounded shadow-sm overflow-x-auto">
                <div className="px-3 py-3 md:py-2 border-b font-semibold text-sm flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex flex-row items-center gap-2 w-full">

                        <input type="date" placeholder="7290" className="border shadow-sm bg-gray-200 p-1 px-2 w-full text-lg rounded-sm cursor-pointer" />


                        <div>
                            <PiArrowsDownUpBold className="text-2xl rotate-90" />
                        </div>


                        <input type="date" placeholder="7290" className="border shadow-sm bg-gray-200 p-1 px-2 w-full text-lg rounded-sm cursor-pointer" />

                    </div>

                    <div className="flex items-center justify-between w-full md:w-fit gap-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded w-fit text-nowrap cursor-pointer"
                        >
                            Save & Export
                        </button>
                        <PrintBtn />
                    </div>
                </div>
            </div>





            <div className="bg-white border rounded shadow-sm overflow-x-auto">
                <div className="px-3 py-2 border-b font-semibold text-sm">Shift Compliance</div>
                <table className="w-full text-sm min-w-[600px]">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-3 py-2 text-left">Task</th>
                            <th className="px-3 py-2 text-left">Monday</th>
                            <th className="px-3 py-2 text-left">Tuesday</th>
                            <th className="px-3 py-2 text-left">Wednesday</th>
                            <th className="px-3 py-2 text-left">Friday</th>
                            <th className="px-3 py-2 text-left">Seturday</th>
                            <th className="px-3 py-2 text-left">Sunday</th>
                            <th className="px-3 py-2 text-left">WTD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">Line Check AM Bar</td>
                                <td className="px-3 py-2">George</td>
                                <td className="px-3 py-2">Yes</td>
                                <td className="px-3 py-2">NO</td>
                                <td className="px-3 py-2">23</td>
                                <td className="px-3 py-2">32</td>
                                <td className="px-3 py-2">23%</td>
                                <td className="px-3 py-2">57%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-center flex gap-2 items-center w-full justify-center">
                    <FaAngleDoubleUp className="text-2xl" />
                    <span>Comparison</span>
                    <FaAngleDoubleDown />
                </h2>
            </div>



            <div className="bg-white border rounded shadow-sm overflow-x-auto">
                <div className="px-3 py-2 border-b font-semibold text-sm">Shift Compliance</div>
                <table className="w-full text-sm min-w-[600px]">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-3 py-2 text-left">Task</th>
                            <th className="px-3 py-2 text-left">Monday</th>
                            <th className="px-3 py-2 text-left">Tuesday</th>
                            <th className="px-3 py-2 text-left">Wednesday</th>
                            <th className="px-3 py-2 text-left">Friday</th>
                            <th className="px-3 py-2 text-left">Seturday</th>
                            <th className="px-3 py-2 text-left">Sunday</th>
                            <th className="px-3 py-2 text-left">WTD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">Line Check AM Bar</td>
                                <td className="px-3 py-2">George</td>
                                <td className="px-3 py-2">Yes</td>
                                <td className="px-3 py-2">NO</td>
                                <td className="px-3 py-2">23</td>
                                <td className="px-3 py-2">32</td>
                                <td className="px-3 py-2">23%</td>
                                <td className="px-3 py-2">57%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





            <div>
                <h2 className="text-2xl font-bold text-center flex gap-2 items-center w-full justify-center">
                    <FaLayerGroup className="text-2xl" />
                    <span>Differences</span>
                    <FaLayerGroup />
                </h2>
            </div>





            <div className="bg-white border rounded shadow-sm overflow-x-auto">
                <div className="px-3 py-2 border-b font-semibold text-sm">Shift Compliance</div>
                <table className="w-full text-sm min-w-[600px]">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-3 py-2 text-left">Task</th>
                            <th className="px-3 py-2 text-left">Monday</th>
                            <th className="px-3 py-2 text-left">Tuesday</th>
                            <th className="px-3 py-2 text-left">Wednesday</th>
                            <th className="px-3 py-2 text-left">Friday</th>
                            <th className="px-3 py-2 text-left">Seturday</th>
                            <th className="px-3 py-2 text-left">Sunday</th>
                            <th className="px-3 py-2 text-left">WTD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">Line Check AM Bar</td>
                                <td className="px-3 py-2">George</td>
                                <td className="px-3 py-2">Yes</td>
                                <td className="px-3 py-2">NO</td>
                                <td className="px-3 py-2">23</td>
                                <td className="px-3 py-2">32</td>
                                <td className="px-3 py-2">23%</td>
                                <td className="px-3 py-2">57%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>






        </main>
    )
}

export default Clock;