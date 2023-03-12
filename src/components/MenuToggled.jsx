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
    <div className="w-full h-screen fixed left-0 top-20 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-400  md:hidden">
      <ul>
        {navigation.map(({ id, name }) => {
          return (
            <li
              className="py-2 text-center hover:cursor-pointer capitalize font-semibold text-lg hover:scale-110 duration-200"
              key={id}
            >
              <Link
                onClick={() => toggleMenuBtv()}
                to={name}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuToggled;
