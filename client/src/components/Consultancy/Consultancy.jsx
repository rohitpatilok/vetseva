import React from "react";
import Navbar from "../Home/Navbar.jsx";
import "./Consultancy.css";

function Consultancy() {

  return (
    <div>
        <Navbar />
        <div className="mx-10 my-10 flex">
            <div className="w-5/6">
                <img className="h-full w-full" src="/Card/vetConsult.jpg" alt="" />
            </div>
            <div className="ml-5 border-2 w-full p-4 font-sans">
                <label for="html" className="text-black mt-2 pb-2 font-normal">Email</label><br />
                <input type="text" className="border-2 w-full" />
                <label for="html" className="text-black font-medium mt-2 pb-2">Contact</label><br />
                <input type="text" className="border-2 w-full" />
                <label for="html" className="text-black font-medium mt-2 pb-2">Reason</label><br />
                <input type="text" className="border-2 w-full" />
                <label for="html" className="text-black font-medium mt-2 pb-2">Who are you?</label><br />
                <input type="text" className="border-2 w-full" />
                <label for="html" className="text-black font-medium mt-2 pb-2">Say Reason Again</label><br />
                <input type="text" className="border-2 w-full" />
                <button className="border-2 border-black my-4 p-3 hover:bg-red-500">Book Online Consultancy</button>
                <button className="border-2 border-black my-4 p-3 ml-4 bg-red-500">Book Offline Consultancy</button>
            </div>
        </div>
        <div>
          <h1>About our Consultancy</h1>
        </div>
    </div>
  )
}

export default Consultancy;
