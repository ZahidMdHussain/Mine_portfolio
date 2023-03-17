import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigation } from "../utils/confiq";
import { togglebtw } from "../utils/toggleSlice";
import { Link } from "react-scroll";

const MenuToggled = () => {
  const dispatch = useDispatch();
  const toggleMenuBtv = () => {
    dispatch(togglebtw());
  };
  const isMenuToggled = useSelector((store) => store.toggle.toggleMenuSlice);
  return !isMenuToggled ? null : (
    <div className="w-full h-screen fixed left-0 top-20 md:hidden">
      <div className="bg-gradient-to-b from-black to-black">
        <ul className="grid gap-8 grid-cols-3 p-4">
          {navigation.map(({ id, name, logos }) => {
            return (
              <li
                className="py-3 text-center hover:cursor-pointer capitalize font-semibold hover:scale-110 duration-200 border border-cyan-400 rounded-md"
                key={id}
              >
                <Link
                  onClick={() => toggleMenuBtv()}
                  to={name}
                  smooth
                  duration={500}
                  className="flex flex-col justify-center items-center text-white"
                >
                  <p className="text-lg">{logos}</p>
                  <p className="text-xs">{name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-screen bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};

export default MenuToggled;
