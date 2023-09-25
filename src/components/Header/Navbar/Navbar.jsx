import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex  justify-between mx-auto py-7 shadow-lg mb-5 px-10 ">
      <Logo />
      <ul className="space-x-4 text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-lime-500 " : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-lime-500 " : ""
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-lime-500 " : ""
          }
        >
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
