import useMediaQuery from "../utils/useMediaQuery";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import icons from "../constants/icons"
import { socialIcons } from "../constants/data";
import { AnimatedHamburgerMenu } from "./AnimatedHamburgerMenu";
import TransitionLink from "./TransitionLink";

function Navbar() {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 720px)");
  return (
    <div>
      {isScrolling ? (
        <nav className="fixed bottom-5 z-20 w-full">
          <div className="w-full flex justify-center">
            {/* Floating Navbar */}
            <div className="w-fit px-12 py-3 h-full bg-[#333333] backdrop-blur-lg rounded-lg">
              <div className="flex items-center justify-center h-full space-x-6">
                <div className="flex">
                  <TransitionLink href="/">
                    <img
                      src={icons.logoWhite}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </TransitionLink>
                  <div className="w-0.5 h-6 bg-zinc-500 rounded-full ml-3"></div>
                </div>
                

                {socialIcons.map((icon, index) => (
                  <a
                    href={icon.href}
                    key={index}
                    className="inline-flex items-center"
                    target="_blank"
                  >
                    <img src={icon.src} alt={icon.alt} width={18} height={18} />
                  </a>
                ))}
                <a
                  href="/Kodjoe_Nartey_Leslie_CV.pdf"
                  download
                  className={`flex items-center text-sm font-semibold text-white`}
                >
                  CV
                  <img
                    src={icons.download_white}
                    alt="download"
                    className="w-4 h-4 ml-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <header className="nav fixed w-full top-0 backdrop-blur-sm z-50">
          <div className="flex items-center justify-between px-8 py-3">
            <div className="w-1/3">
              {location.pathname == "/" || location.pathname == "/about" ? (
                <NavLink to="/">
                  <img
                    src={icons.logoBlack}
                    alt="logo"
                    height={30}
                    width={30}
                  />
                </NavLink>
              ) : (
                <NavLink to="/">
                  <img
                    src={icons.logoWhite}
                    alt="logo"
                    height={30}
                    width={30}
                  />
                </NavLink>
              )}
            </div>
            {isAboveMediumScreens ? (
              <div
                className={`flex gap-x-5 text-sm font-semibold ${
                  location.pathname == "/" || location.pathname == "/about"
                    ? "text-black"
                    : "text-white"
                }`}
              >

                <a
                  href="/Kodjoe_Nartey_Leslie_CV.pdf"
                  download
                  className={`flex items-center justify-center text-sm font-semibold hover:text-zinc-400 ease-in-out duration-500`}
                >
                  My CV
                  <img
                    src={icons.download_black}
                    alt="download"
                    className="w-4 h-4 ml-1"
                  />
                </a>
              </div>
            ) : (
              <div className="w-1/3 flex flex-row-reverse">
                <AnimatedHamburgerMenu />
              </div>
            )}
          </div>
        </header>
      )}
    </div>
  ); 
}

export default Navbar;
