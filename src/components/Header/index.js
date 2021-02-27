import React from "react";

function Header() {
  return (
    <div className="w-full py-5 bg-gray-800 flex flex-row ">
      <div className="container mx-auto h-full flex justify-between items-center ">
        <h1 className="text-white text-5xl bold">Mouts</h1>
        <ul className="list-none flex justify-between items-center ">
          <li className="text-3xl">
            <a
              href="https://github.com/diegofullstackjs"
              target="_blank"
              className="transition duration-500 ease-in-out text-white hover:text-yellow-500  transform hover:-translate-y-1 hover:scale-110"
            >
              Github
            </a>
          </li>
          <li className="ml-2 text-3xl">
            <a
              href="https://www.linkedin.com/in/diegofullstackbr/"
              target="_blank"
              className="transition duration-500 ease-in-out text-white hover:text-yellow-500  transform hover:-translate-y-1 hover:scale-110"
            >
              Linkdln
            </a>
          </li>
          <li className="ml-2 text-3xl">
            <a
              href="https://www.instagram.com/diegofullstack/"
              target="_blank"
              className="transition duration-500 ease-in-out text-white hover:text-yellow-500  transform hover:-translate-y-1 hover:scale-110"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
