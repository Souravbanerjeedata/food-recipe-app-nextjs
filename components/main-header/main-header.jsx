"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="logo" />
        Cook Book
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
  );
}
