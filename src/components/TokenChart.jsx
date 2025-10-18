// import Circle from '../assets/circle.png';
// import box from '../assets/box.png';
// import dog from '../assets/chartDog.png';


// export default function TokenChart() {
//   const tableData = [
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//     { empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
//   ];




//   return (
//     <div className=" h-full ">

//       <div className='bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF00] backdrop-blur-xl border-x-2 border-t-2 rounded-t-lg border-[#FFFFFF30]'>
//         <div className='pb-1'>
//           <div className=' flex items-center justify-between gap-[140px] mt-10 mb-20 mx-[90px] '>
//             <div className=''>
//               <img className='w-[361px] h-[361px]' src={Circle} alt="image" />
//             </div>
//             <div className='flex items-center justify-center'>
//               <div className='w-[303px] h-[375px] '>
//                 <img src={box} alt="image" />
//               </div>

//               <div className='w-[315px] h-[437px] '>
//                 <img src={dog} alt="image" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>




//       {/* Table Section */}

//         <table className="w-full">
//           <thead className='bg-black'>
//             <tr className="h-[68px] text-[#FFFFFF] ">
//               <th className="p-3 font-semibold text-lg "></th>
//               <th className="p-3 font-semibold text-lg">Token</th>
//               <th className="p-3 font-semibold text-lg">Percentage</th>
//               <th className="p-3 font-semibold text-lg">Token Price</th>
//               <th className="p-3 font-semibold text-lg">Token Price</th>
//               <th className="p-3 font-semibold text-lg">Total Amount</th>
//             </tr>
//           </thead>
//           <tbody className='text-center bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF00]  border-x-2 border-b-2 rounded-b-lg border-[#FFFFFF30]'>
//             {tableData.map((row, index) => (
//               <tr key={index} className=" hover:bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF10] transition">
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.empty}</td>
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.token}</td>
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.percentage}</td>
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.price1}</td>
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.price2}</td>
//                 <td className="p-5 font-normal text-lg text-white opacity-60">{row.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//     </div>
//   )
// }




import Circle from '../assets/circle.png';
import box from '../assets/box.png';
import dog from '../assets/chartDog.png';

export default function TokenChart() {
  const tableData = [
    { id: 1, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
    { id: 2, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
    { id: 3, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
    { id: 4, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
    { id: 5, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
    { id: 6, empty: "Seddigg", token: "1,00,000", percentage: "12%", price1: "58.3", price2: "12%", total: "10% Monthly" },
  ];

  return (
    <div className="relative z-10 h-full w-full">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF00] backdrop-blur-xl border-x-2 border-t-2 rounded-t-lg border-[#FFFFFF20]">
        <div className="pb-6">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mt-10 mb-10 px-6 lg:px-16">

            {/* Circle Image */}
            <div className="flex justify-center">
              <img className="max-w-[361px] w-full h-auto" src={Circle} alt="circle" />
            </div>

            {/* Right Images */}
            <div className="flex items-center justify-center gap-6">
              <div className="max-w-[303px] h-auto w-full">
                <img className="w-full h-auto" src={box} alt="box" />
              </div>
              <div className="max-w-[315px] w-full">
                <img className="w-full h-auto" src={dog} alt="dog" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className=" w-full overflow-x-auto">
        <table className="w-full min-w-[1100px] ">
          <thead className="bg-black">
            <tr className="h-[68px] text-[#FFFFFF] text-sm sm:text-base">
              <th className="p-3 font-semibold"></th>
              <th className="p-3 font-semibold">Token</th>
              <th className="p-3 font-semibold">Percentage</th>
              <th className="p-3 font-semibold">Token Price</th>
              <th className="p-3 font-semibold">Token Price</th>
              <th className="p-3 font-semibold">Total Amount</th>
            </tr>
          </thead>
          <tbody className="text-center bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF00] border-x-2 border-b-2 border-[#FFFFFF20] border-separate">
            {tableData.map((row, id) => (
              <tr key={row.id} className="hover:bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF10] transition rounded-lg">
                <td
                  className={`p-3 sm:p-5 text-white opacity-60 ${id === tableData.length - 1 ? "rounded-bl-lg" : ""
                    }`}
                >
                  {row.empty}
                </td>
                <td className="p-3 sm:p-5 text-white opacity-60">{row.token}</td>
                <td className="p-3 sm:p-5 text-white opacity-60">{row.percentage}</td>
                <td className="p-3 sm:p-5 text-white opacity-60">{row.price1}</td>
                <td className="p-3 sm:p-5 text-white opacity-60">{row.price2}</td>
                <td
                  className={`p-3 sm:p-5 text-white opacity-60 ${id === tableData.length - 1 ? "rounded-br-lg" : ""
                    }`}
                >
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


