"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../../public/images/logo/logo.svg";
import menuData from "./menuData";
import DropDown from "./DropDown";
import siteConfig from "../../../siteConfig";


const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathUrl = usePathname();


  return (
    <>
      <header
        className="left-0 top-0 w-full z-9999 bg-white shadow !py-4 lg:!py-0 transition duration-100 sticky top-0"
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
          <div className="w-full text-white text-xl font-bold lg:w-1/4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src={
                  siteConfig.siteURL
                    ? `${siteConfig.faviconPath}`
                    : "/images/favicons/default.png"
                }
                alt="Logo"
                width={24}
                height={24}
                className="mr-2"
              />

              <h2 className="inline-block text-[black] dark:text-[white]">
                {siteConfig.siteName}
              </h2>
            </Link>
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="lg:hidden block"
            >
              <span className="block relative cursor-pointer w-5.5 h-5.5">
                <span className="du-block absolute right-0 w-full h-full">
                  <span
                    className={`block relative top-0 left-0 bg-[black] dark:bg-[white] rounded-sm h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                      !navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`block relative top-0 left-0 bg-[black] dark:bg-[white] rounded-sm h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                      !navigationOpen ? "!w-full delay-400" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`block relative top-0 left-0 bg-[black] dark:bg-[white] rounded-sm h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                      !navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 w-full h-full rotate-45">
                  <span
                    className={`block bg-[black] dark:bg-[white] rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                      !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`block bg-[black] dark:bg-[white] rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                      !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
              navigationOpen
                ? "!visible bg-[white] dark:bg-dark dark:shadow-lg relative !h-auto max-h-[400px] rounded-md mt-4 p-7.5"
                : ""
            }`}
          >
            <nav>
              <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
                {menuData.map((menuItem, key) => (
                  <li key={key} className="nav__menu group relative lg:py-7">
                    {menuItem.submenu ? (
                      <>
                        <DropDown menuItem={menuItem} />
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`relative text-sm py-1.5 px-4 border border-transparent hover:nav-gradient ${
                          pathUrl === menuItem.path
                            ? "nav-gradient text-black" 
                            : "text-black" 
                        }`}
                        style={{ color: 'black' }} 
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>


            <nav>
              <ul
                className={`flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2 lg:py-10 `}
              > 
              </ul>
            </nav>

            <div className="flex items-center gap-6 mt-7 lg:mt-0">
              <>
                {/* 
                <Link
                  href="/upload"
                  target=""
                  rel="noopener noreferrer"
                  className="
                  border
                  dark:border-none
                  relative
                  rounded-lg
                  text-[black]
                  dark:text-[white]
                  text-sm
                  transform 
                  items-center
                  gap-1.5
                  py-2
                  px-4.5
                  dark:shadow-button
                  dark:hover:button-gradient-hover
                  transform 
                  hover:scale-110
                  dark:button-border-gradient
                  flex
                  items-center
                  justify-center
                  transition 
                  duration-500 
                  ease-in-out 
                  fixed"
                >
                  Nudify Image
                  <svg
                    className="mt-0.5 hover:scale-110  "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002"
                      className="fill-[black] dark:fill-white"
                    />
                  </svg>
                </Link>
                */}
              </>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
