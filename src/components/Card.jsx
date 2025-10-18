

import { useState } from "react";

export default function Card({ data }) {
  const [hoverSide, setHoverSide] = useState(null); // "buy" | "sell" | null

  return (
    <div
      className={`w-[400px] h-[154px] p-6 border-2 border-[#FFFFFF40] rounded-lg text-white font-normal text-[22px] backdrop-blur-lg transition-all duration-300 
        ${hoverSide === "buy" ? "bg-gradient-to-r from-[#FFFFFF20] to-transparent" : ""}
        ${hoverSide === "sell" ? "bg-gradient-to-l from-[#FFFFFF20] to-transparent" : ""}
         ${!hoverSide ? "bg-gradient-to-r from-[#FFFFFF10] to-[#FFFFFF05]" : ""}
      `}
      onMouseLeave={() => setHoverSide(null)}>
      {/* Title */}
      <p>{data.title}</p>

      {/* Content */}
      <div className="flex justify-between items-center gap-[130px] mt-5">
        {/* BUY */}
        <div className="flex flex-col w-1/2 cursor-pointer gap-0.5" onMouseEnter={() => setHoverSide("buy")}>
          <p className="text-sm font-normal opacity-60">When Buying</p>
          <span className={`text-[28px] font-semibold transition-colors duration-300 ${hoverSide === "buy" ? "text-[#F06500]" : "text-white"}`}>
            {data.buy}
          </span>
        </div>

        {/* SELL */}
        <div className="flex flex-col gap-0.5 w-1/2 cursor-pointer" onMouseEnter={() => setHoverSide("sell")}>

          <p className="text-sm font-normal opacity-60">When Selling</p>
          <span className={`text-[28px] font-semibold transition-colors duration-300 ${hoverSide === "sell" ? "text-[#F06500]" :"text-white" }`}>
            {data.sell}
          </span>
        </div>
      </div>
    </div>
  );
}
