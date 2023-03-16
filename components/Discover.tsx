import React from "react";

function Discover() {
  return (
    <div className=" text-white ">
      <div className="w-full ">
        <video
          className=""
          loop
          autoPlay
          muted
          src="https://shortest.link/jFA2"
        ></video>
      </div>
      <div className="flex flex-col pl-10 pt-24 ">
        <p>Rolex and Cinema</p>
        <div className="pt-8 font-semibold text-4xl tracking-widest">
          <h1>A MOVEMENT</h1>
          <h1>PERPETUALLY</h1>
          <h1>REINVENTED</h1>
        </div>
        <div className="p-4">
          <button className="border border-white bg-transparent text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#265C26] transition duration-300 ease-in-out">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discover;
