import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { navigation } from "../utils/confiq";
import { togglebtw } from "../utils/toggleSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuBtv = () => {
    dispatch(togglebtw());
  };
  const isMenuToggled = useSelector((store) => store.toggle.toggleMenuSlice);
  return (
    <div className="flex justify-between items-center bg-black text-white w-full h-20 px-6 pt-3 fixed">
      <div className="">
        <h1 className="text-4xl font-medium md:text-5xl font-sign">Zahid</h1>
      </div>
      <div className="">
        <ul className="hidden md:flex md:items-center text-gray-400">
          {navigation.map(({ id, name }) => {
            return (
              <li
                className="px-3 hover:cursor-pointer capitalize font-medium hover:scale-110 duration-200"
                key={id}
              >
                {name}
              </li>
            );
          })}
        </ul>
        <div
          className="text-gray-400 z-10 hover:cursor-pointer mr-2 md:hidden"
          onClick={() => {
            toggleMenuBtv();
          }}
        >
          {isMenuToggled ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
