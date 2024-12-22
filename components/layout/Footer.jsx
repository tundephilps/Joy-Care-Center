import { HiOutlineMail } from "react-icons/hi";

import Logo from "../../public/Logoo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 overflow-x-clip">
      <div className=" lg:px-12 px-4 mx-auto flex lg:flex-row flex-col gap-6 justify-between lg:items-center items-start">
        {/* Left Section */}
        <div className="flex flex-row items-start space-x-4">
          <Image src={Logo} width={120} height={50} alt="Float UI logo" />
          <div>
            <h2 className="text-lg font-semibold">Joy CareGivers</h2>
            <p className="text-xs text-gray-400">
              Elderly Care is our topmost Priority
            </p>
          </div>
        </div>

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
