import Boxs from "./Boxs";

const SecondCol = () => {
    return (
        <div className="col-span-3  md:col-span-2 lg:col-span-1 h-fit w-full">


            <h3 className="font-semibold mb-3 text-sm bg-white border rounded shadow-sm p-2 w-full">MySchedule Compliance</h3>

            <div className="bg-white border rounded shadow-sm p-4 w-full">
                <div className="font-semibold mb-3 text-xl">Manager</div>
                <div className="text-xl font-bold">
                    97%
                </div>
            </div>

            <div className="bg-white border rounded shadow-sm p-4 w-full mt-3">
                <div className="font-semibold mb-3 text-xl">Associate</div>
                <div className="text-xl font-bold">
                    90.79%
                </div>
            </div>


            <Boxs header={"Time Count"} headvalue={'21.14%'} data={[6]} />

            <Boxs header={"Audit Result"} headvalue={'Green'} data={[7]} />


        </div>
    )
}

export default SecondCol;