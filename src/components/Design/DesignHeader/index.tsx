'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from '@/components/Common/Button';
import designMenuData from "./designMenuData";
import { signOut, useSession } from 'next-auth/react';

const DesignHeader = ({ selectedTab, setSelectedTab }) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathUrl = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <header
        className="left-0 top-0 w-full z-9999 shadow !py-1 lg:!py-1 transition duration-100 top-0"
        style={{ backgroundImage: 'linear-gradient(to right, #08c3cc, #7d2ae8)' }}
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
          <div className="w-full text-white text-xl font-bold lg:w-1/4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src={`/favicon.ico`}
                alt="Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <h2 className="inline-block text-[white] lg:py-3">
                InkGen
              </h2>
            </Link>
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="lg:hidden block"
            >
              {/* Hamburger Icon or any other icon for mobile menu */}
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
                {designMenuData.map((menuItem, key) => (
                  <li key={key} className="nav__menu group relative lg:py-3">
                    <button
                      onClick={() => setSelectedTab(menuItem.title.toLowerCase().replace(' ', ''))}
                      className={`relative text-md py-1.5 px-4 border border-transparent hover:bg-[#489fd4] ${
                        selectedTab === menuItem.title.toLowerCase().replace(' ', '')
                          ? "nav-gradient rounded text-black" 
                          : "text-black rounded" 
                      }`}
                      style={{ color: 'white' }} 
                    >
                      {menuItem.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <ul className={`flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2 lg:py-3`}></ul> {/* Adjusted padding */}
            </nav>
            <div className="flex items-center gap-6 mt-7 lg:mt-0">
            {session?.user?.name && <button onClick={() => signOut()}>Log out</button>}
              {/* <Button
                href="contact"
                bgColor="bg-[#f3f3f3]"
                hoverColor="hover:bg-[#e1e4e6]"
                textColor="text-[#000]"
                style={{}}
                className="flex items-center justify-center gap-2"
              >
                Log out
              </Button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DesignHeader;
