/* eslint-disable @next/next/no-img-element */
"use client";
import menus from "@/Data/menu";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import classNames from "classnames";
import Button from "./Form/Button";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <header>
      <nav
        id="navbar"
        className={classNames(
          "fixed inset-x-0 z-20 w-full border-b border-gray-200 bg-backgroundColor/80 backdrop-blur",
          { "navbar-active": isNavbarActive }
        )}
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <img
                  src="/images/logo.svg"
                  alt="hubit technology logo"
                  className="h-10"
                />
              </Link>

              <button
                aria-label="humburger"
                id="hamburger"
                onClick={handleHamburgerClick}
                className="relative -mr-6 p-6 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                />
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                />
              </button>
            </div>
            <div
              id="layer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden"
            />
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 "
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {menus.map(({ title, link }, index) => (
                    <NavLink key={index} title={title} link={link} />
                  ))}
                </ul>
              </div>

              <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                <Link href="/contact">
                  <Button
                    title="Get Started"
                    color="secondary"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
