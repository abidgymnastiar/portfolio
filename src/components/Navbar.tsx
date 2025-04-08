import { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/Data";
import { Link } from "react-scroll";
import { CgMenuMotion } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10 max-w-[1280px]">
      <div className="flex items-center justify-between rounded-full bg-tertiary-100/50 border border-secondaryy-100 backdrop-blur-md  p-3 md:p-0">
        <h1 className="uppercase font-sans font-bold text-lg lg:text-2xl ml-5 text-primaryy-100">
          Portfolio
        </h1>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-primaryy-200 mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <CgClose className="w-7 h-7" fill="none" />
          ) : (
            <CgMenuMotion className="w-7 h-7" fill="none" />
          )}
        </button>

        {/* Navigation LINK */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item text-primaryy-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
