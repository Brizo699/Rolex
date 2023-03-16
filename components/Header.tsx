import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/Ai";
import { AiOutlineSearch } from "react-icons/Ai";
import { HiOutlineMenuAlt4 } from "react-icons/Hi";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <header className="flex px-10 justify-between text-lg w-full text-white hover:bg-white group items-center py-2 absolute z-10 font-author transition duration-300">
      {/* Top */}
      <div className="text-xl group-hover:text-black transition duration-300 gap-8 flex mt-8">
        <div className="flex items-center hover:text-green-900">
          <HiOutlineMenuAlt4 className="text-xl" />
          <button className="hidden md:flex pl-1">Menu</button>
        </div>
        <div className="items-center xl:flex hidden gap-5">
          <Link href="/">Watches</Link>
          <Link href="/">World of Rolex</Link>
          <Link href="/">Store Locator</Link>
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
      <div className="flex items-center gap-4 group-hover:text-black transition duration-300 mt-8">
        <div className="flex items-center text-xl gap-1 hover:text-green-900  group">
          <AiOutlineSearch className="text-xl " />
          <button className="hidden md:flex ">Search</button>
        </div>
        <div className="flex items-center text-xl gap-1 hover:text-green-900">
          <AiFillHeart className="text-xl hover:text-green-900" />
          <button className="hidden md:flex ">Collection</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
