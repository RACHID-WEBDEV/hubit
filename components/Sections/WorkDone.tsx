/* eslint-disable @next/next/no-img-element */
import React from "react";

const WorkDone = () => {
  return (
    <section className="my-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 max-w-4xl lg:mx-auto md:text-4xl xl:text-5xl">
            Works of ours that made life Easier to our clients
          </h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
            A growing need to mean growing pains. Privacy, and the right tool
            for every step of your journey - Jira Software friction - company
            size.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-backgroundAlt p-4 lg:p-8 shadow-2xl shadow-gray-600/10  sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
            <div className="flex h-full flex-col justify-center space-y-4 md:space-y-5">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                For Small Business
              </h2>
              <p className="text-gray-600 text-center text-xs lg:text-base">
                We will strive for your success, and we look forward to every
                opportunity to serve you and help meet your small business
                technology needs.
              </p>
              <div className="p-2 mt-4 rounded-lg bg-primaryAlt">
                <img
                  className="rounded-lg"
                  src="/works/Treasure-web.webp"
                  alt="Tope Dare Foundation"
                />
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-backgroundAlt p-4 lg:p-8 shadow-2xl shadow-gray-600/10  sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
            <div className="flex h-full flex-col justify-center space-y-4 md:space-y-5">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                For Big Enterprise
              </h2>
              <p className="text-gray-600 text-xs lg:text-base text-center ">
                We&apos;re an enterprise technology solutions company focused on
                delivering value through process improvement within the private
                and public sectors
              </p>
              <div className="p-2 mt-4 rounded-lg bg-primaryAlt">
                <img
                  className="rounded-lg"
                  src="/works/nefa.png"
                  alt="Tope Dare Foundation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDone;
