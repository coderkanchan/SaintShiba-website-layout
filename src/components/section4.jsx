import lines from '../assets/lines.png';
import linesRight from '../assets/linesRight.png';

export default function Roadmap() {
  return (
    <section className="z-20 relative bg-black w-full overflow-visible">


      <div className="z-10 absolute  top-[300px] right-0 w-[800px] h-[850px] bg-gradient-to-l from-[#FFA80060] to-[#FFA80030] rounded-full blur-3xl opacity-40 translate-x-[400px] -translate-y-1/2"></div>

      <div className="z-10 absolute top-[300px] right-0 w-[750px] h-[850px] translate-x-[450px] -translate-y-1/2">
        <img src={lines} alt="image" />
      </div>

      <div className='z-10 absolute top-[300px] -right-20 w-[800px] h-[460px]  bg-gradient-to-r from-[#FFA80040] to-[#FFA80050]  rounded-full blur-3xl opacity-50 translate-x-[550px] -translate-y-1/2'></div>

      <div className='absolute z-10 top-[400px] left-0 w-[537px] h-[731px] translate-x-1/1 '>
        <img src={linesRight} alt='image' />
      </div>


      <h2 className="text-white font-semibold text-5xl text-center mb-16">Roadmap</h2>

      <div className="relative z-10 max-w-4xl mx-auto px-3  pb-10 ">

        <div className="absolute top-0 left-4 md:left-1/2 transform md:-translate-x-1/2 w-[5px] h-[72%] bg-white"></div>

        {/* Phase 1 */}
        <div className="mb-16 flex flex-col md:flex-row  justify-between w-full">
          <div className="w-full text-right md:w-5/12 md:text-right">
            <h3 className="text-white text-4xl font-semibold">Phase-1</h3>
            <p className="h-auto text-white mt-5 text-lg font-normal opacity-60 whitespace-pre-line">
              Massa pellentesque sagittis
              Aliquam sed in odio.
              Turpis blandit at interdum
              Eget tempus nulla tempus arcu.</p>
          </div>
          <div className="w-full md:w-2/12 flex justify-start md:justify-center my-4 md:my-0">
            <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-b from-[#FFA800] to-[#F06500] "> </div>
          </div>
          <div className="hidden md:block w-5/12"></div>
        </div>

        {/* Phase 2 */}
        <div className="mb-16 flex flex-col md:flex-row  justify-between w-full">
          <div className="hidden md:block w-5/12"></div>
          <div className="w-full md:w-2/12 flex justify-start md:justify-center my-4 md:my-0">
            <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-b from-[#FFA800] to-[#F06500] "> </div>
          </div>
          <div className="w-full text-left md:w-5/12 ">
            <h3 className="text-white text-4xl font-semibold">Phase-2</h3>
            <p className="text-white mt-5 text-lg font-normal opacity-60">
              Massa pellentesque sagittis
              Aliquam sed in odio.
              Turpis blandit at interdum
              Eget tempus nulla tempus arcu.</p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="mb-16 flex flex-col md:flex-row  justify-between w-full">
          <div className="w-full text-right md:w-5/12 md:text-right">
            <h3 className="text-white text-4xl font-semibold">Phase-3</h3>
            <p className="text-white mt-5 text-lg font-normal opacity-60">
              Massa pellentesque sagittis
              Aliquam sed in odio.
              Turpis blandit at interdum
              Eget tempus nulla tempus arcu.</p>
          </div>
          <div className="w-full md:w-2/12 flex justify-start md:justify-center my-4 md:my-0">
            <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-b from-[#FFA800] to-[#F06500] "> </div>
          </div>
          <div className="hidden md:block w-5/12"></div>
        </div>

        {/* Phase 4 */}
        <div className="mb-16 flex flex-col md:flex-row  justify-between w-full">
          <div className="hidden md:block w-5/12"></div>
          <div className="w-full md:w-2/12 flex justify-start md:justify-center my-4 md:my-0">
            <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-b from-[#FFA800] to-[#F06500] "> </div>
          </div>
          <div className="w-full text-left md:w-5/12 ">
            <h3 className="text-white text-4xl font-semibold">Phase-4</h3>
            <p className=" text-white mt-5 text-lg font-normal opacity-60">
              Massa pellentesque sagittis
              Aliquam sed in odio.
              Turpis blandit at interdum
              Eget tempus nulla tempus arcu.</p>
          </div>
        </div>

      </div>

    </section>
  );
}
