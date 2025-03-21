import { useState } from "react";
import { MENU_LINKS } from "../utils/Data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
//   const closeMenu = () => {
//     setIsOpen(false);
//   };
  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-md m-5 p-3 md:p-0">
        <h1 className="uppercase font-sans font-bold text-3xl">Portfolio</h1>

        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
