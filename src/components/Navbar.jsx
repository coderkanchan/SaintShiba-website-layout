import Btn from "./Btn.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { id: 1, inside: "Home", path: '/' },
    { id: 2, inside: "About", path: '/about' },
    { id: 3, inside: "Tokenomics", path: '/Tokenomics' },
    { id: 4, inside: "How to buy", path: '/How-To-Buy' },
    { id: 5, inside: "FAQ", path: '/FAQ' }
  ]

  return (
    <div className="absolute top-0  w-full z-20 backdrop-blur-md bg-black/70  ">
      <nav className="max-w-[1320px] h-[100px] mx-auto px-3 flex items-center justify-between">
        <div>
          <span className=" text-4xl font-normal text-[#FFFFFF]">Saint<span className="font-bold text-orange-600">Shiba</span></span>
        </div>
        <div className="flex gap-4 items-center justify-between"  >
          <div className="hidden xl:flex items-center justify-between">
            {links.map(link => (
              <NavLink key={link.id} to={link.path} className={({ isActive }) => isActive ? "text-[#F06500] text-lg pb-1 underline font-bold" : "text-white text-lg  font-normal  hover:text-[#F06500] transition-all duration-300 mx-6 "}>
                {link.inside}
              </NavLink>
            ))}
          </div>
          <Btn />
        </div>
      </nav>
    </div>
  )
}

