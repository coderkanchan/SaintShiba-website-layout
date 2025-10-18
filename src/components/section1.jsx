import dogImg from '../assets/dog.png';

export default function Section1() {
  return (
    <section className=" bg-black w-full flex items-center justify-center">
      <div className="w-[1320px] mx-auto px-3 flex xl:flex-row flex-col items-center justify-between">
       
          <div className="max-w-[660px] min-h-[352px]">

            <h1 className="font-semibold  text-[#FFFFFF] text-4xl sm:text-5xl  lg:text-6xl  leading-tight">Cursus ligula habitant sed integer.</h1>

            <p className="font-normal text-base sm:text-lg md:text-xl lg:text-[22px] text-[#FFFFFF] opacity-70 py-10">Urna, dictum volutpat augue tortor. Fermentum vulputate convallis viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis etiam sed. Cursus donec porttitor fames tellus.</p>

            <button className='lg:px-8 lg:py-3 text-lg px-3 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-[#FFA800] to-[#F06500] hover:shadow-xl hover:shadow-orange-950'>Learn more</button>

          </div>

          <div className='max-w-full min-h-full'>
            <img className=' w-64 sm:w-80 md:w-[400px] lg:w-[480px] xl:w-[551px]' src={dogImg} alt='image' />
          </div>
       
      </div>
    </section>
  )
}