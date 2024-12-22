import React from "react";

const Map = () => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.6193467549942!2d-93.2162785!3d30.21941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b842ced88c171%3A0x2132dfad0c0089c8!2s425%207th%20St%2C%20Lake%20Charles%2C%20LA%2070601%2C%20USA!5e0!3m2!1sen!2sng!4v1734888692827!5m2!1sen!2sng"
          loading="lazy"
        ></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">425 7th Street, Lake Charles, Louisiana, USA</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-red-500 leading-relaxed">
              joy.care.center.msgrdeblanc@gmail.com
            </a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">337-496-6575</p>
            <p className="leading-relaxed">337-429-5186</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
