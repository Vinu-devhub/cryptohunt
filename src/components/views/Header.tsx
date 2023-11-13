import { Menu, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/logo";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-[#080808] w-full text-sm py-6 sm:py-8 px-4 border-b border-gray-800">
        <nav className=" sm:flex sm:items-center sm:justify-between relative">
          <div>
            <div className=" flex gap-2 items-center">
              <Logo size={48} />
              <Link to="/">
                <span className=" font-bold text-xl text-white ">
                  KryptoHunt |
                </span>
              </Link>
            </div>
          </div>
          <div
            className={`${
              mobileMenu ? "flex flex-col" : "hidden"
            } mt-4 sm:flex sm:flex-row sm:items-center gap-12 text-white text-lg sm:space-y-0  sm:mt-0 `}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " border-b-2 border-blue-700 text-blue-500 " : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive ? " border-b-2 border-blue-700 text-blue-500 " : ""
              }
            >
              Watchlist
            </NavLink>
            <NavLink to="/">Learn</NavLink>
          </div>
          <div className=" invisible flex gap-4 absolute sm:static right-0 top-4">
            <div className=" text-white hidden sm:block ">currency</div>
            <div>
              <Sun size={24} color="white" />
            </div>
            <div
              className=" text-white sm:hidden "
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
