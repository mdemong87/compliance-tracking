import Boxs from "./Boxs";

const FristCol = () => {
    return (

        <div className="col-span-3  md:col-span-2 lg:col-span-1 h-fit w-full">


            <h3 className="font-semibold mb-3 text-sm bg-white border rounded shadow-sm p-2 w-full">Overall Compliance</h3>


            <div className="bg-white border rounded shadow-sm p-4 w-full">
                <div className="font-semibold mb-3 text-xl">SEE NOTE</div>
                <div>
                    <p>Overall compliance is the avg of punch and shift compliance</p>
                </div>
            </div>

            <Boxs header={"FOH Compliance"} headvalue={'21.14%'} data={[10]} />

            <Boxs header={"Kitchen Compliance"} headvalue={'11.90%'} data={[6]} />


        </div>
    )
}

export default FristCol;