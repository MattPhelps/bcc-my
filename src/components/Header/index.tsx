"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import DropDown from "./DropDown";
import siteConfig from "../../../siteConfig";
import Button from "@/components/Common/Button";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathUrl = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <header
        // Add "sticky" to the class below to make the header sticky
        className="left-0 top-0 w-full z-9999 bg-white shadow !py-4 lg:!py-0 transition duration-100 top-0"
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
          <div className="w-full text-white text-xl font-bold lg:w-1/4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src={
                  siteConfig.siteURL
                    ? `/favicon.ico`
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
            ></button>
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
                        className={`relative text-md py-1.5 px-4 border border-transparent hover:bg-[#f3f3f3] ${
                          pathUrl === menuItem.path
                            ? "nav-gradient rounded text-black"
                            : "text-black rounded"
                        }`}
                        style={{ color: "black" }}
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
              ></ul>
            </nav>

            {/* 
            <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <Button
                href="/design"
                bgColor="bg-[#8b3eff]"
                hoverColor="hover:bg-[#7731d8]"
                textColor="text-[#fff]"
                style={{ }}
                className=""
              >
                Create a Design
              </Button>
            </div>
            */}

            <div className="flex items-center gap-6 mt-7 lg:mt-0">
              {/* <Button
                href="/login"
                bgColor="bg-[#f3f3f3]"
                hoverColor="hover:bg-[#e1e4e6]"
                textColor="text-[#000]"
                style={{ }}
                className=""
              >
                Log in
              </Button> */}

              {session?.user?.name ? (
                <button onClick={() => signOut()}> Sign out</button>
              ) : (
                <Button href="/signup" style={{}} className="">
                  Sign up
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
