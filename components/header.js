import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  {
    /* TODO: Move Theme (dark mode) to separate component */
  }
  const { theme, setTheme } = useTheme();
  const [isThemeMounted, setIsThemeMounted] = useState(false);

  useEffect(() => {
    setIsThemeMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isThemeMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <header className="container flex flex-wrap justify-between mx-auto max-w-3xl px-6 md:px-9 py-6 sm:flex-nowrap">
      {/* Brand Logo */}
      <div className="flex lowercase md:w-full">
        <a className="flex font-black text-2xl sm:text-4xl" href="/">
          <h1>Alex Chong</h1>
        </a>
      </div>
      {/* Navigation */}
      <nav
        className={`${
          menu ? "" : "hidden"
        } absolute md:relative md:flex bg-stickyNote dark:bg-pidgin-dark h-screen md:h-auto items-center top-16 left-0 w-full md:top-0`}
      >
        <ul className="flex flex-col flex-grow font-black lowercase text-center text-lg md:flex-row md:text-xl">
          <li className="cursor-pointer items-center w-full py-8 md:py-0">
            <Link className="" href="/">
              Posts
            </Link>
          </li>
          <li className="cursor-pointer w-full mx-auto py-8 md:py-0">
            <Link className="" href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="cursor-pointer w-full mx-auto py-8 md:py-0">
            <Link className="" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        {/* Dark Mode */}
        <button
          className="bg-black box-border flex h-8 items-center my-auto mr-8 px-2 rounded text-stickyNote focus:outline-none dark:bg-pidgin-light md:mr-0"
          type="button"
          onClick={toggleTheme}
        >
          <span className={`${theme === "dark" ? "hidden" : ""}`}>
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <span className={`${theme === "dark" ? "" : "hidden"}`}>
            <FontAwesomeIcon icon={faSun} />
          </span>
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
