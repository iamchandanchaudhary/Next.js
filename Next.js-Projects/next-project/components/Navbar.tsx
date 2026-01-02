"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>

        {/* <Link href={"/courses"}> */}
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/courses/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/courses/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/courses/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
        {/* </Link> */}

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/call">Through a Call</HoveredLink>
              <HoveredLink href="/email">Through a Email</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Book a Call</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>

      </Menu>

    </div>
  )
}

export default Navbar;
