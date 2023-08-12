import Link from "next/link";
import React from "react";

const ServicesCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="hover:bg-primary border-gray-300 shadow-sm border cursor-pointer lg:mt-0 w-full rounded-2xl h-min 2xl:p-10 ">
      <div className="group p-8 space-y-4 py-10 ">
        {icon}
        <h2 className="font-medium text-2xl text-800">{title} </h2>
        <p className="text-sm text-gray-600 hover:text-gray-800">
          {description}
        </p>
        <Link
          href={link}
          className="flex items-center justify-between text-gray-700 group-hover:text-gray-800 pt-1"
        >
          <span className="text-sm font-medium">Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
