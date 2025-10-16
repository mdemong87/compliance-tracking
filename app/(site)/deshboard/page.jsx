import ApexChart from "@/app/componnent/Chart";

const Clock = () => {
    return (
        <main className="p-4 space-y-6 z-40">

            <div className="grid grid-cols-4 items-center gap-3 w-full h-fit">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-white border rounded shadow-sm overflow-x-auto w-full px-3 py-2">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-500">KPI Status:</span>
                        <span className={`text-sm px-1 rounded-md bg-green-200 border border-green-300`}>Good</span>
                    </div>
                    <h3 className="text-xl font-bold pt-3 flex items-center gap-3">
                        <span>KPI Outcome:</span>
                        <span className="text-2xl">70.98%</span>
                    </h3>
                </div>


                <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-white border rounded shadow-sm overflow-x-auto w-full px-3 py-2">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-500">KPI Status:</span>
                        <span className={`text-sm px-1 rounded-md bg-yellow-200 border border-yellow-300`}>Average</span>
                    </div>
                    <h3 className="text-xl font-bold pt-3 flex items-center gap-3">
                        <span>KPI Outcome:</span>
                        <span className="text-2xl">70.98%</span>
                    </h3>
                </div>


                <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-white border rounded shadow-sm overflow-x-auto w-full px-3 py-2">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-500">KPI Status:</span>
                        <span className={`text-sm px-1 rounded-md bg-green-200 border border-green-300`}>Good</span>
                    </div>
                    <h3 className="text-xl font-bold pt-3 flex items-center gap-3">
                        <span>KPI Outcome:</span>
                        <span className="text-2xl">70.98%</span>
                    </h3>
                </div>


                <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-white border rounded shadow-sm overflow-x-auto w-full px-3 py-2">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-500">KPI Status:</span>
                        <span className={`text-sm px-1 rounded-md bg-red-200 border border-red-300`}>Bad</span>

                    </div>
                    <h3 className="text-xl font-bold pt-3 flex items-center gap-3">
                        <span>KPI Outcome:</span>
                        <span className="text-2xl">70.98%</span>
                    </h3>
                </div>


            </div>








            {/* graph chart here */}

            <div className="grid grid-cols-2 items-center gap-3 h-fit">
                <div className="border bg-white px-3 py-2 rounded-md w-full h-fit col-span-2 lg:col-span-1">
                    <ApexChart title={"KPI Outcome Visualization"} des={'Performance Over Time'} />
                </div>
                <div className="border bg-white px-3 py-2 rounded-md h-full w-full col-span-2 lg:col-span-1">
                    <ApexChart title={"Trend Chart"} des={'Performance Over Time'} />
                </div>
                <div className="border bg-white px-3 py-2 rounded-md w-full h-full col-span-2 lg:col-span-1">
                    <ApexChart title={"Overall Company-Level Trend Chart"} des={'Performance Over Time'} />
                </div>
                <div className="border bg-white px-3 py-2 rounded-md h-full w-full col-span-2 lg:col-span-1">
                    <ApexChart title={"Compliance Comparison Chart"} des={'Performance Over Time'} />
                </div>
            </div>

























        </main>
    )
}

export default Clock;