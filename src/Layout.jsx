
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs.jsx";


export default function Layout() {
  const location = useLocation();
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute z-20 top-[120px] w-full ">
         <Breadcrumbs />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.95}}
          animate={{ opacity: 1,scale: 1 }}
          // exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}

          // initial={{ x: 100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // // exit={{ x: -100, opacity: 0 }}
          // transition={{ duration: 0.4, ease: "easeInOut" }}

          // initial={{ rotate: 10, opacity: 0 }}
          // animate={{ rotate: 0, opacity: 1 }}
          // // exit={{ rotate: -10, opacity: 0 }}
          // transition={{ duration: 0.5 }}

          // initial={{ x: "100%" }}
          // animate={{ x: 0 }}
          // // exit={{ x: "-100%" }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}

          // initial={{ y: "100%" }}
          // animate={{ y: 0 }}
          // // exit={{ y: "100%" }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}

          // initial={{ scale: 0.8 }}
          // animate={{ scale: 1 }}
          // // exit={{ scale: 0.8 }}
          // transition={{ duration: 0.4, ease: "easeInOut" }}

          // initial={{ rotate: 15 }}
          // animate={{ rotate: 0 }}
          // // exit={{ rotate: -15 }}
          // transition={{ duration: 0.6, ease: "easeInOut" }}
        >

          <Outlet />

        </motion.div>
      </AnimatePresence>
    </div>
  )
}