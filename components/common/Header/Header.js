import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  {
    /* TODO: Move Theme (dark mode) to separate component */
  }
  const { theme, setTheme } = useTheme();
  const [isThemeMounted, setIsThemeMounted] = useState(false);

  useEffect(() => setIsThemeMounted(true), []);

  const toggleTheme = () => {
    if (isThemeMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <header className="container flex flex-wrap md:flex-nowrap font-bold lowercase bg-stickyNote dark:bg-pidgin-dark block sticky fixed z-50 top-0 justify-between mx-auto max-w-3xl px-6 md:px-9 py-6">
      {/* Brand Logo */}
      <div className="flex md:w-full">
        <Link href="/">
          <a className="flex text-2xl sm:text-3xl" href="/">
            Alex Chong
          </a>
        </Link>
      </div>
      {/* Navigation */}
      <nav
        className={`${
          menu ? "" : "hidden"
        } absolute bg-stickyNote dark:bg-pidgin-dark md:relative md:flex h-screen md:h-auto items-center top-16 left-0 w-full md:top-0`}
      >
        <ul className="flex flex-col flex-grow font-black lowercase text-center text-lg md:text-xl md:flex-row">
          <li className="cursor-pointer w-full my-auto py-8 md:py-0">
            <Link href="/">Posts</Link>
          </li>
          <li className="cursor-pointer w-full my-auto py-8 md:py-0">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="cursor-pointer w-full my-auto py-8 md:py-0">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        {/* Dark Mode */}
        <button
          className="box-border flex h-8 items-center my-auto mr-8 px-2 rounded focus:outline-none md:mr-0 hover:opacity-60"
          type="button"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon
            // className={`${theme === "dark" ? "" : ""}`}
            icon={faAdjust}
          />
        </button>
        {/* Hamburger */}
        <button
          className="flex flex-col cursor-pointer my-auto rounded focus:outline-none md:hidden"
          type="button"
          onClick={handleMenu}
        >
          <span className="block bg-black h-1 mb-1 ml-auto relative rounded-sm w-6 dark:bg-gray-50" />
          <span className="block bg-black h-1 mb-1 ml-auto relative rounded-sm w-7 dark:bg-gray-50" />
          <span className="block bg-black h-1 ml-auto relative rounded-sm w-5 dark:bg-gray-50" />
        </button>
      </div>
    </header>
  );
}
