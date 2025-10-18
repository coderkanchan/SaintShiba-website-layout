
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import lines from '../assets/lines.png';

const faqs = [
  { index: 1, question: "Volutpat consequat dictumst vel donec.", answer: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus." },
  { index: 2, question: "Volutpat consequat dictumst vel donec.", answer: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus." },
  { index: 3, question: "Volutpat consequat dictumst vel donec.", answer: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus." },
  { index: 4, question: "Volutpat consequat dictumst vel donec.", answer: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus." },
  { index: 5, question: "Volutpat consequat dictumst vel donec.", answer: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus." },
]

export default function Section5() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" relative bg-black w-full pb-[450px]  overflow-visible">

      <div className="z-0 absolute top-[900px] right-20 w-[750px] h-[750px] bg-gradient-to-r from-orange-500/20 to-[#FFA80060] rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute z-0 top-[900px] right-0 w-[750px] h-[550px] translate-x-[450px] -translate-y-1/2">
        <img src={lines} alt="image" />
      </div>

      <div className='absolute z-0 top-[900px] right-0 w-[400px] h-[600px] bg-gradient-to-t from-[#FFA80090]   rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2'></div>

      <h3 className="font-semibold text-5xl text-white text-center mb-10">FAQ</h3>

      <div className="z-20 relative max-w-[1320px] mx-auto px-3 space-y-4 ">

        {faqs.map((faq, index) => (
          <div key={index} className="w-full h-auto rounded-xl px-1 py-2 bg-gradient-to-r from-[#FFFFFF20] to-[#FFFFFF10] border-2 border-[#FFFFFF10] text-white  backdrop-blur-sm shadow-md">

            <button onClick={() => toggleFaq(index)} className="w-full text-[22px] px-6 py-4 text-left font-semibold flex items-center justify-between ">
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>

            <div className={`px-5 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-auto " : "max-h-0"}`}>
              <p className="pt-3 pb-3 text-lg font-normal text-white opacity-60">{faq.answer}</p>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  )
}





