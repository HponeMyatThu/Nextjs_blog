import React from "react";

import Logo from "@/assets/logo.png";
import Link from "next/link";
import classes from "./css/main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const Header = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={Logo.src} alt="image with foods are on the plate" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
