import React from "react";

function Footer() {
  return (
    <div className="bg-green-800 h-52 content-center mobile:w-full">
        <ul className="flex laptop:gap-12 mobile:gap-8 laptop:justify-center mobile:justify-around">
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">Contact</li></a>
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">About</li></a>
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">Instagram</li></a>
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">X</li></a>
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">Linkdin</li></a>
            <a href="" className="no-underline text-white"><li className="mobile:text-sm laptop:text-base">Youtube</li></a>
        </ul>
        <p className="text-gray-300 flex justify-center mt-8">Copyright © 2024, vetSeva, Inc.</p>
    </div>
  );
}

export default Footer;
