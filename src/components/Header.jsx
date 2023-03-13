import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { navigation } from "../utils/confiq";
import { togglebtw } from "../utils/toggleSlice";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuBtv = () => {
    dispatch(togglebtw());
  };
  const isMenuToggled = useSelector((store) => store.toggle.toggleMenuSlice);
  return (
    <div className="flex justify-between items-center bg-black text-white w-full h-20 px-6 pt-3 fixed z-10">
      <div className="">
        <h1 className="text-4xl font-medium md:text-5xl font-sign text-cyan-500 selection:text-white selection:bg-cyan-500">
          Zahid
        </h1>
      </div>
      <div className="">
        <ul className="hidden md:flex md:items-center text-gray-200">
          {navigation.map(({ id, name }) => {
            return (
              <li
                className="mx-2 px-1 hover:cursor-pointer capitalize font-medium hover:scale-105 duration-300 hover:text-cyan-500 selection:text-white selection:bg-cyan-500"
                key={id}
              >
                <Link to={name} smooth duration={500}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="text-gray-200 z-10 hover:cursor-pointer mr-2 md:hidden"
          onClick={() => {
            toggleMenuBtv();
          }}
        >
          {isMenuToggled ? <FaTimes size={20} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
