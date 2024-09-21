import React, { useState } from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Products from "./Products";
import { motion } from "framer-motion";
import "../../../index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseOver2, setMouseOver2] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver2() {
    setMouseOver2(true);
  }

  function handleMouseOut2() {
    setMouseOver2(false);
  }

  return (
    <div className="container-navbar bg-green-800 relative font-sans flex items-center align-middle justify-between mobile:h-16">
      <li className="mr-auto ml-10 text-2xl font-semibold text-white block gap-5 cursor-pointer">
          vetSeva
      </li>
      <ul className="flex gap-4 items-center align-middle justify-end mb-0">
        <li className="block gap-5 cursor-pointer text-lg py-4 mobile:invisible laptop:visible" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Products
          {mouseOver ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          <div id="products-submenu" className="justify-between flex-wrap">
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Dog Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Cat Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Horse Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Goat Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Sheep Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
            <ul className="mt-4 mb-4">
              <a href=""><h4 className="text-black tetx-sm font-bold">Cow Food</h4></a>
              <hr className="border-black w-40" />
              <a href=""><li className="pt-1 pb-1">Dry Food</li></a>
              <a href=""><li className="pt-1 pb-1">Wet Food</li></a>
              <a href=""><li className="pt-1 pb-1">Veternary Diet</li></a>
              <a href=""><li className="pt-1 pb-1">Puppy Food</li></a>
            </ul>
          </div>
        </li>

        <li className="block gap-5 cursor-pointer text-lg py-4 mobile:invisible laptop:visible" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} >
          Services
          {mouseOver2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          <div id="products-submenu">
            <ul className="cursor-none">
              <li>Online Consultancy</li>
              <li>Offline Consultancy</li>
              <li>Ambulance</li>
              <li>Pet Care</li>
            </ul>
            <ul>
              <li>Online Consultancy</li>
              <li>Offline Consultancy</li>
              <li>Ambulance</li>
              <li>Pet Care</li>
            </ul>
            <ul>
              <li>Online Consultancy</li>
              <li>Offline Consultancy</li>
              <li>Ambulance</li>
              <li>Pet Care</li>
            </ul>
          </div>
        </li>
        <li className="block gap-5 cursor-pointer text-lg mobile:invisible laptop:visible">Vet Consult</li>
        <li className="block gap-5 cursor-pointer text-lg mobile:invisible laptop:visible">About Us</li>
        
      </ul>
      <div className="flex items-center rounded-3xl py-2.5 px-4 pr-0 relative mobile:invisible laptop:visible">
          <input type="text" placeholder="Search" className="lolu pl-6 py-1.5 rounded-3xl border-0 outline-none max-w-72 text-lg text-black" />
          <img src="/navbar/search-b.png" alt="" className="w-6 cursor-pointer ml-10 absolute left-48" />
      </div>
      <li className="block gap-5 cursor-pointer mr-4 text-md font-semibold mobile:invisible laptop:visible">
          <ShoppingCartOutlinedIcon /> Cart
      </li>
    </div>
  );
}

export default Navbar;