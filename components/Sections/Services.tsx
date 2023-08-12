import services from "@/Data/services";
import { CurveLine, Line, WebIcon } from "@/public/SvgsIcons";
import Link from "next/link";
import React from "react";
import ServicesCard from "../Cards/ServicesCard";

const Services = () => {
  return (
    <section className="pt-20 lg:pt-40 ">
      <div className="px-4 md:px-12 lg:px-6 xl:max-w-7xl xl:px-0 mx-auto max-w-7xl ">
        <h2 className="font-semibold text-4xl lg:text-6xl text-gray-800 max-w-lg ">
          Our{" "}
          <span className=" font-Syne relative">
            Included{" "}
            <span className="absolute right-0 bottom-px hidden lg:flex">
              <Line width={270} />
            </span>
          </span>{" "}
          Services.
        </h2>

        <div className=" grid md:grid-cols-2 gap-6 pb-16 lg:grid-cols-4 pt-10">
          {services.map(({ icon, title, description, link }, index) => (
            <ServicesCard
              key={index}
              icon={icon}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
