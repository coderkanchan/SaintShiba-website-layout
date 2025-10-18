import BuyImg from '../assets/BuyImg.png';


export default function Section2() {
  const btnData = [
    { id: 1, title: "nunc libero ac", p: "Amet, integer et ultrices non viverra dolor dui" },
    { id: 2, title: "nunc libero ac", p: "Amet, integer et ultrices non viverra dolor dui" },
    { id: 3, title: "nunc libero ac", p: "Amet, integer et ultrices non viverra dolor dui" }
  ]


  return (
    <section className="bg-[#1D1A1A] w-full overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-3 pt-20 pb-[100px]">
        <div className="flex xl:flex-row flex-col gap-10 items-center justify-between ">
          <div className="w-full xl:w-[60%]">
            <h1 className="text-[#FFFFFF] text-5xl font-semibold">How to Buy</h1>
            <p className="text-[#FFFFFF] font-normal text-lg opacity-70">Urna, dictum volutpat augue tortor. Fermentum vulputate convallis viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis etiam sed. Cursus donec porttitor fames tellus.</p>
            <div>
              {btnData.map(data => (
                <div key={data.id} className="group w-full max-w-[660px] h-[92px] rounded-full bg-[#151313] hover:bg-black flex gap-5 items-center px-2.5 my-5 cursor-pointer transition-colors duration-300 ease-in-out ">

                  <div className="w-[71px] h-[71px] rounded-full bg-[#FFFFFF] transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#FFA800] group-hover:to-[#F06500] cursor-pointer flex items-center justify-center font-semibold text-[22px] group-hover:text-[#FFFFFF] ">{data.id}</div>

                  <div>
                    <h1 className="text-[#FFFFFF] font-semibold text-[22px]">{data.title}</h1>
                    <p className="text-[#FFFFFF] font-normal text-lg opacity-70">{data.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-[1056px] h-[636px] relative  left-10 '>
            <img className='w-full h-full  ' src={BuyImg} alt='image'/>
          </div>
        </div>
      </div>
    </section>
  )
}





