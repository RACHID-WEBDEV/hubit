import { menusType } from "@/Data/menu";
import Link from "next/link";
import React from "react";

const NavLink = ({ link, title }: menusType) => {
  return (
    <li>
      <Link
        href={link}
        className="block transition hover:text-primary md:px-4 "
      >
        <span className="font-Marcellus text-base">{title}</span>
      </Link>
    </li>
  );
};

export default NavLink;
