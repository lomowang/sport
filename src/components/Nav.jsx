// logo
import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";

import Image from "next/image";
// import Image from "next/image";
import React from "react";

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
