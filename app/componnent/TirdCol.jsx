import Boxs from "./Boxs";

const TirdCol = () => {
    return (
        <div className="col-span-3  md:col-span-2 lg:col-span-1 h-fit w-full">

            <h3 className="font-semibold mb-3 text-sm bg-white border rounded shadow-sm p-2 w-full">CQSMA Scores</h3>

            {/* <div className="bg-white border rounded shadow-sm p-4 max-w-md w-full">
                <div className="font-semibold mb-3 text-sm">Add Product</div>
                <form className="space-y-3 text-sm">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Price</label>
                        <input type="number" className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Stock</label>
                        <input type="number" className="w-full border px-2 py-1 rounded" />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Save
                    </button>
                </form>
            </div> */}


            <Boxs header={"External CQSMA"} headvalue={'21.14%'} data={[6]} />
            <Boxs header={"Internal CQSMA"} headvalue={'21.14%'} data={[6]} />
            <Boxs header={"Custom Focus Points"} headvalue={'21.14%'} data={[6]} />


        </div>
    )
}

export default TirdCol;