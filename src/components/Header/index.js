"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <header className="w-full px-5 sm:px-10 py-4 flex items-center justify-between bg-light dark:bg-dark fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <Logo />

      {/* Mobile Menu Button */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5 cursor-pointer transition-all ease duration-300">
          <span
            className="absolute left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300"
            style={{
              top: click ? "50%" : "0",
              transform: click
                ? "rotate(45deg) translateY(-50%)"
                : "rotate(0deg)",
            }}
          ></span>
          <span
            className="absolute left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300"
            style={{
              top: "50%",
              opacity: click ? 0 : 1,
              transform: "translateY(-50%)",
            }}
          ></span>
          <span
            className="absolute left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300"
            style={{
              bottom: click ? "50%" : "0",
              transform: click
                ? "rotate(-45deg) translateY(50%)"
                : "rotate(0deg)",
            }}
          ></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4 border border-dark dark:border-light rounded-full py-3 px-8 font-medium bg-light/80 dark:bg-dark/80 backdrop-blur-md">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/blogs" className="hover:underline">
          Blog
        </Link>
        <Link href="/gaming" className="hover:underline">
          Gaming
        </Link>
        <Link href="/articles" className="hover:underline">
          Articles
        </Link>

        {/* Theme Switch */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light"
              ? "bg-dark text-light"
              : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className="fill-dark" />
          ) : (
            <SunIcon className="fill-dark" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          click ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-light dark:bg-dark flex flex-col items-center justify-center gap-6 text-lg font-medium transform transition-transform duration-300 z-50 border-l border-dark/10 dark:border-light/10 ${
          click ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link href="/blogs" onClick={closeMenu}>
          Blog
        </Link>
        <Link href="/gaming" onClick={closeMenu}>
          Gaming
        </Link>
        <Link href="/articles" onClick={closeMenu}>
          Articles
        </Link>

        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
            closeMenu();
          }}
          className={cx(
            "w-8 h-8 flex items-center justify-center rounded-full",
            mode === "light"
              ? "bg-dark text-light"
              : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className="fill-dark" />
          ) : (
            <SunIcon className="fill-dark" />
          )}
        </button>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4">
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6 hover:scale-125 transition-transform" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-6 h-6 hover:scale-125 transition-transform" />
          </a>
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6 hover:scale-125 transition-transform" />
          </a>
          <a
            href={siteMetadata.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <DribbbleIcon className="w-6 h-6 hover:scale-125 transition-transform" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// "use client"
// import Link from "next/link";
// import Logo from "./Logo";
// import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
// import siteMetadata from "@/src/utils/siteMetaData";
// import { useThemeSwitch } from "../Hooks/useThemeSwitch";
// import { useState } from "react";
// import { cx } from "@/src/utils";

// const Header = () => {

//   const [mode, setMode] = useThemeSwitch();
//   const [click, setClick] = useState(false);

// const toggle = () =>{
//   setClick(!click)
// }
//   return (
//     <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
//         <Logo />

//         <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
//           <div className="w-6 cursor-pointer transition-all ease duration-300">
//             <div className="relative">
//             <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
//             style={{
//              transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
//             }}
            
//             >&nbsp;</span>
//             <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//             style={{
//               opacity: click ? 0 : 1
//              }}
//             >&nbsp;</span>
//             <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//             style={{
//               transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
//              }}
//             >&nbsp;</span>
//             </div>

//           </div>
//         </button>

//         <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
//         fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
//         transition-all ease duration-300
//         "
//         style={{
//           top: click ? "1rem" : "-5rem"
//          }}
        
//         >
//             <Link href="/" className="mr-2">Home</Link>
//             <Link href="/about" className="mx-2">About</Link>
//             <Link href="/contact" className="mx-2">Contact</Link>
//             <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
//             className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
//             "bg-light text-dark" )}
//             aria-label="theme-switcher"
//             >
//                 {
//                   mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
//                 }
//             </button>
//         </nav>


//         <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
//         fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
//             <Link href="/" className="mr-2">Home</Link>
//             <Link href="/about" className="mx-2">About</Link>
//             <Link href="/contact" className="mx-2">Contact</Link>
//             <Link href="/" className="mx-2">Blog</Link>
//             <Link href="/" className="mx-2">Gaming</Link>
//             <Link href="/" className="mx-2">Articales</Link>
//             <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
//             className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
//             "bg-light text-dark" )}
//             aria-label="theme-switcher"
//             >
//                 {
//                   mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
//                 }
//             </button>
//         </nav>
//         <div className=" hidden sm:flex items-center">
//             <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
//             <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
//             <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
//             <a href={siteMetadata.dribbble} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
//         </div>
//     </header>
//   )
// }

// export default Header;