
import dogImage from '../assets/dog.png';

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center bg-[url('/src/assets/saintBg.png')] bg-cover bg-center relative">

      {/* Gradient overlay */}
      <div className="absolute inset-0 top-20 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

      {/* Content */}
      <div className="max-w-[1320px] w-full mx-auto px-4 flex flex-col xl:flex-row pt-0 lg:pt-20 xl:pt-0 items-center justify-between ">

        {/* Left section */}
        <div className="max-w-[690px] ">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Accumsan  <br/> ut orci vitae
          </h1>

          <p className="relative max-w-[660px] text-white h-[99px]text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-normal my-5">
            Velit eget sit nibh fringilla risus ullamcorper malesuada. Morbi nulla suscipit dolor,
            volutpat quam at urna donec rutrum. In vulputate congue arcu in et.
          </p>

          <button className="relative px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-white font-semibold text-base sm:text-lg md:text-xl bg-gradient-to-r from-[#FFA800] to-[#F06500] rounded-full mt-6 cursor-pointer hover:shadow-2xl hover:shadow-stone-950">
            Connect Wallet
          </button>
        </div>

        {/* Right section (image) */}
        <div className="mt-10 xl:mt-0 flex justify-center">
          <img className="xl:pt-[200px] w-64 sm:w-80 md:w-[400px] lg:w-[480px] xl:w-[565px]" src={dogImage} alt="dog" />
        </div>

      </div>
    </div>
  );
}

