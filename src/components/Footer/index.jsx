"use client";
import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import { navData, pages, socialLinks } from "@/data/appData";
import { usePathname, useRouter } from "next/navigation";
import TypingAnimation from "../TypingAnimation";
import clsx from "clsx";

export default function Footer() {
  const router = useRouter();

  const pathName = usePathname();

  const _showSideBar = pages?.includes(pathName);

  if (_showSideBar) {
    return null;
  }

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <div className={classes.logoDiv}>
            <Image src={"/images/appImages/car.png"} fill alt="logo" />
          </div>
          <h1 className={classes.title}>Caropedia</h1>
        </div>

        <div className={classes.navItems}>
          {navData?.map((item) => (
            <h5
              key={item?.route}
              className={clsx(
                pathName === item?.route && classes.activeTab,
                classes.nav
              )}
              onClick={() => router?.push(item?.route)}
            >
              {item?.label}
            </h5>
          ))}
        </div>
        <div className={classes.socialLinkDiv}>
          {socialLinks?.map((item, index) => (
            <div
              onClick={() => router?.push(item?.route)}
              className={[
                classes.icon,
                socialLinks.length - 3 === index && classes.thirdIcon,
              ].join(" ")}
              key={index}
            >
              {item?.icon}
            </div>
          ))}
        </div>
        <div className={classes.bottomFooter}>
          <p>
            © {new Date().getFullYear()} Design and Developed by Mukadus Jawaid.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
