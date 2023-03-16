import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/Ai";
import { AiOutlineSearch } from "react-icons/Ai";
import { HiOutlineMenuAlt4 } from "react-icons/Hi";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <header className="flex tracking-wide px-10 justify-between text-lg w-full text-white hover:bg-white group items-center py-6 transition duration-200">
      {/* Top */}
      <div className="flex items-center gap-4 group-hover:text-black transition duration-500">
        <div className="flex items-center text-xl ">
          <AiOutlineHeart className="text-2xl " />
          <button className="hidden md:flex">Collection</button>
        </div>
        <div className="flex items-center text-xl">
          <AiOutlineSearch className="text-2xl" />
          <button className="hidden md:flex">Search</button>
        </div>
      </div>
      {/* Mid */}
      <div
        className="flex justify-center absolute left-0 right-0 w-full py-4"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Image
          style={{ opacity: active ? 0 : 1 }}
          className="absolute transition duration-200 "
          src="/RolexLogo1.png"
          alt=""
          height={90}
          width={90}
        />
        <Image
          style={{ opacity: active ? 1 : 0 }}
          className=" transition duration-200"
          src="/RolexLogo2.png"
          alt=""
          height={90}
          width={90}
        />
      </div>
      {/* Bottom */}
      <div className="flex items-center text-xl group-hover:text-black transition duration-200">
        <HiOutlineMenuAlt4 className="text-2xl" />
        <button className="hidden md:flex pl-1">The list</button>
      </div>
    </header>
  );
}
export default Header;
