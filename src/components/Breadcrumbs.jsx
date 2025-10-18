import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 ">

      <Link to="/" className="text-orange-600 text-xl hover:underline">Home</Link>

      {paths.map((path, index) => {

        const url = "/" + paths.slice(0, index + 1).join("/");

        const label = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={url} className="text-white text-xl">
            {" > "}
            <Link to={url} className=" hover:underline">{label}</Link>
          </span>
        )
      })}
    </div>
  )
}