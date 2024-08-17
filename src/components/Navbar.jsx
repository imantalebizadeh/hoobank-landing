import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar flex w-full items-center justify-between py-6">
      <a href="#">
        <img
          src={logo}
          alt="HookBank"
          aria-label="Logo of HookBank"
          className="h-[32px] w-[124px]"
        />
      </a>

      {/* navigation links */}
      <ul className="hidden flex-1 list-none items-center justify-end gap-10 sm:flex">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className="cursor-pointer font-poppins text-[16px] font-normal text-dimWhite hover:text-white"
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      {/* mobile navigation button */}
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] cursor-pointer object-contain"
          onClick={() => setToggleMenu((prevState) => !prevState)}
        />

        {/* mobile navigation */}
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          {/* mobile navigation links */}
          <ul className="flex flex-1 list-none flex-col items-center justify-end gap-4">
            {navLinks.map(({ id, title }) => (
              <li
                key={id}
                className="cursor-pointer font-poppins text-[16px] font-normal text-white"
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
