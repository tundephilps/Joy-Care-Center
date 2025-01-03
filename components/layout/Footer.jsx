import { HiOutlineMail } from "react-icons/hi";

import Logo from "../../public/Logo.jpeg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 overflow-x-clip">
      <div className=" lg:px-12 px-4 mx-auto flex lg:flex-row flex-col gap-6 justify-between lg:items-center items-start">
        {/* Left Section */}
        <a className="items-center flex flex-col" href="/">
          <Image src={Logo} width={80} height={80} alt="Float UI logo" />
          <p className="text-red-500 font-extrabold text-2xl font-serif italic">
            WE CARE
          </p>
        </a>

        {/* Right Section */}
        <div className="flex flex-col items-start  space-y-4">
          <div className="flex items-center space-x-2 text-gray-400 border border-gray-600 rounded-lg p-4">
            <HiOutlineMail className="text-2xl" />
            <a
              href="mailto:hello@landingfolio.com"
              className="hover:text-white text-xs transition"
            >
              joy.care.center.msgrdeblanc@gmail.com
            </a>
          </div>
          <nav className="flex space-x-6 text-xs">
            <a href="#features" className="hover:text-white transition">
              Contact Us
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition">
              Guides
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Partners
            </a>
            <a href="#contact" className="hover:text-white transition">
              Terms and Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
