import TokenChart from '../components/TokenChart.jsx';

export default function Tokenomics() {
  return (
    <div className='bg-black w-full '>
      <div className="max-w-[1320px] pt-[200px] pb-[100px] mx-auto px-3 flex flex-col items-center justify-center">
        <TokenChart />
      </div>
    </div>
  )
}