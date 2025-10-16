import BoxItem from "./BoxItem";

const Boxs = ({ header, headvalue, data }) => {
    return (
        <div className="bg-white border rounded shadow-sm w-full mt-3 h-full">
            <div className="flex gap-1 justify-between bg-gray-100 px-3 py-2 rounded-t sm">
                <div className="font-semibold text-md w-full">
                    {header}
                </div>
                <div className="w-[70px] text-md font-bold">
                    {headvalue}
                </div>
            </div>
            <div className="mt-3 px-3">

                {
                    Array.from({ length: data[0] })?.map((item, index) => {
                        return (
                            <BoxItem key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Boxs;