import Image from "next/image";
import Support1 from "../../public/Support1.png";

import Support2 from "../../public/Support2.png";

export default function Serving2() {
  const services = [
    {
      icon: "/Support1.png", // Replace with actual path
      title: "Ombudsman",
      description:
        "We provide support to nursing home residents and their families.",
    },
    {
      icon: "/Support2.png", // Replace with actual path
      title: "Home Delivered Meals",
      description: "Providing warm meals to housebound community members.",
    },
    {
      icon: "/Support3.png", // Replace with actual path
      title: "Transportation",
      description:
        "Our three buses allow us to transport community members to and from many places.",
    },
    {
      icon: "/Support4.png", // Replace with actual path
      title: "Adult Disability Resource Center",
      description:
        "You can't take advantage of helpful services if you don't know about them.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="text-center flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={service.icon}
                alt={service.title}
                className="h-16 w-16 mb-4"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold text-red-700 mb-2 whitespace-nowrap">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
