import React from "react";
import Why from "../../public/why.jpg";
import Image from "next/image";
import Flower from "../../public/Flower.jpg";

const Serving = () => {
  return (
    <section className="py-10 bg-black lg:py-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
          <div className="h-full pr-12 lg:order-2 lg:mb-40">
            <div className="relative h-full lg:h-auto">
              <div className="absolute  w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                <Image
                  className="object-cover object-right w-full h-full scale-150"
                  src={Flower}
                  alt=""
                  data-aos="fade-down-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
              </div>
              <div className="relative lg:-top-12">
                <Image
                  className=""
                  src={Why}
                  alt=""
                  data-aos="fade-up-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Why Should your choose Us?
              </p>
              <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Profesional Caregivers
              </h2>
              <p className="text-xl leading-relaxed text-gray-200 mt-9">
                Serving the Active Aging in our Community
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-200">
                Clincial care and caregiver support. (Patient visit Monitoring)
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-red-600 rounded-md hover:bg-red-700 focus:bg-red-700"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serving;
