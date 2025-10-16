

import MakeGetAll from "@/utilis/requestrespose/get";
import FristCol from "../../componnent/FristCol";
import PubID from "../../componnent/PubID";
import SecondCol from "../../componnent/SecondCol";
import TirdCol from "../../componnent/TirdCol";

export default async function Homepage() {

  const token = 'rwerwer';


  const res = await MakeGetAll('api/pubs', token);
  console.log(res);


  return (
    <main className="p-4 flex-1 overflow-auto space-y-6">
      {/* Table */}
      <PubID />



      <div className="h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">

        <FristCol />
        <SecondCol />
        <TirdCol />

      </div>

    </main>
  );
}