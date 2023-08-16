/* eslint-disable @next/next/no-img-element */
import { DesignIcons, DevlopIcon, SecureIcons } from "@/public/SvgsIcons";
import React from "react";

const Approach = () => {
  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 md:px-12 lg:px-6 xl:px-0">
      <div className="gap-6 space-y-12 md:flex md:gap-12 xl:gap-20 md:space-y-0">
        <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
          <div className="relative group ">
            <div className="relative rounded-3xl overflow-hidden lg:max-w-[650px] lg:max-h-[650px] ">
              <img
                src="/works/about.png"
                className="max-w-sm  lg:max-w-[650px] lg:max-h-[600px} rounded-3xl transition-transform duration-[1600ms]  group-hover:scale-110 scale-100"
                alt="hubit screenshot"
              />
            </div>

            <img
              src="/works/graph.png"
              className="absolute top-52 -right-16 z-20"
              alt="hubit screenshot"
              width="259"
              height="200"
            />
          </div>
        </div>
        <div className="relative md:w-1/2">
          <div className=" inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute">
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 lg:text-5xl">
                Our Unique Approach
              </h3>
              <p className="mt-8 text-gray-600 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
              </p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 justify-center items-center rounded-full border border-gray-200 bg-gray-50 p-4  dark:bg-gray-900/40">
                    <SecureIcons />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Security Token Offering Solutions
                    </h4>
                    <p className="mt-1 text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Accusantium nemo perspiciatis delectus atque autem!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center h-16 w-16 rounded-full border border-gray-200 bg-gray-50 p-4 ">
                    <DevlopIcon />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Development and Integration
                    </h4>
                    <p className="mt-1 text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Leverage our deep knowledge of numerous frameworks to
                      establish high-performance Development solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center h-16 w-16 rounded-full border border-gray-200 bg-gray-50 p-4 ">
                    <DesignIcons />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Marketing Roadmap Integration
                    </h4>
                    <p className="mt-1 text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Leverage our deep knowledge of numerous frameworks to
                      establish high-performance Development solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
            id="panel-1"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
              </p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Together as one
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusantium nemo perspiciatis delectus atque autem!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      New ideas
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
            id="panel-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
              </p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Together as one
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusantium nemo perspiciatis delectus atque autem!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Growth
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
