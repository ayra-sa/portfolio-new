import Link from "next/link";
import React from "react";
import Container from "./container";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {};

const navMenu = [
  {
    menu: "About",
    link: "#about",
  },
  {
    menu: "Tech",
    link: "#tech",
  },
  {
    menu: "Projects",
    link: "#projects",
  },
  {
    menu: "Contact",
    link: "#contact",
  },
];

const Header = (props: Props) => {
  const [expandMenu, setExpandMenu] = React.useState(false);

  const handleOpenMobile = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <header className="py-5 fixed z-20 w-full bg-[#F3F4FA]">
      <nav>
        <Container>
          <div className="flex items-center justify-between">
            <Link href="#" className="text-3xl font-bold">
              arya
            </Link>

            <ul
              className={`flex flex-col gap-x-8 text-2xl lg:text-lg font-semibold lg:font-normal tracking-wider items-center fixed lg:static lg:flex-row inset-0 bg-[#F3F4FA] lg:bg-transparent gap-y-10 place-content-center transition-transform duration-500 ${
                expandMenu ? "translate-x-0" : "translate-x-full"
              } lg:translate-x-0`}
            >
              {navMenu.map((menu, id) => (
                <li key={id}>
                  <Link href={menu.link}>{menu.menu}</Link>
                </li>
              ))}
            </ul>

            <button className="relative z-30 lg:hidden" onClick={handleOpenMobile}>
              {expandMenu ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
