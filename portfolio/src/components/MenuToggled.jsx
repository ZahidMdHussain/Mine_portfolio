import React from "react";
import { useSelector } from "react-redux";
import { navigation } from "../utils/confiq";

const MenuToggled = () => {
  const isMenuToggled = useSelector((store) => store.toggle.toggleMenuSlice);
  return !isMenuToggled ? null : (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden">
      <ul>
        {navigation.map(({ id, name }) => {
          return (
            <li
              className="py-2 text-center hover:cursor-pointer capitalize font-semibold text-lg hover:scale-110 duration-200"
              key={id}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuToggled;
