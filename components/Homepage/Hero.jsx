import React from "react";
import Hero1 from "../../public/Hero1.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src={Hero1} // Replace with the actual path to your image
        alt="Smiling Older Adults"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Red Transparent Overlay */}
      <div className="absolute inset-0 bg-red-600 bg-opacity-60 lg:w-1/2 w-full">
        <div
          className="h-full flex flex-col justify-center lg:text-start text-center text-white lg:p-12 p-6"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="lg:text-4xl text-2xl font-bold leading-tight">
            Aging Doesn't Mean Losing Your Independence, We Can Help!
          </h1>
          <p className="mt-4 text-lg">
            It is the sole purpose of the Calcasieu Council on Aging to
            advocate, develop, and deliver essential services to enhance the
            quality of life for older adults.
          </p>
          <button className="mt-6 px-6 py-3 text-red-600 bg-white rounded-md font-medium hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
