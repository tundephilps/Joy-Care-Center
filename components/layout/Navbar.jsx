"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/Logo.jpeg";

function Navbar() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Contact Us", path: "/ContactUs" },
    { title: "Services", path: "/OurServices" },
    { title: "Testimonial", path: "javascript:void(0)" },
    { title: "Donations", path: "javascript:void(0)" },

    { title: "Terms and Conditions", path: "/Terms" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 lg:px-12 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-2 md:block">
          <a className="items-center flex flex-col" href="/">
            <Image src={Logo} width={50} height={50} alt="Float UI logo" />
            <p className="text-red-500 font-extrabold text-2xl font-serif italic">
              WE CARE
            </p>
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="lg:justify-center lg:items-center lg:flex-row flex  flex-col text-center items-start justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-red-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="javascript:void(0)"
            className="py-3 px-4 text-white bg-red-600 hover:bg-red-900 rounded-md shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
