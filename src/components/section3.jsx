import Card from "./Card.jsx";
import TokenChart from "./TokenChart.jsx";

export default function Section3() {
  const headBox = [
    { id: 1, title: "Liquidity", buy: "3-5%", sell: "3-5%" },
    { id: 2, title: "Marketing", buy: "3-5%", sell: "3-5%" },
    { id: 3, title: "Rewards", buy: "3-5%", sell: "3-5%" }
  ]


  return (
    <section className=" w-full bg-black">
      <div className="max-w-[1320px] py-20 mx-auto px-3 flex flex-col items-center justify-center">

        <h1 className="text-white text-5xl font-semibold mx-auto mb-9">Tokenomics</h1>
        <div className=" grid 2xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10 pb-10">
          {headBox.map((data, id) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
        <TokenChart />
      </div>
    </section>
  )
}



