"use client";

import Image from "next/image";
import classes from "./SideBar.module.css";
import React, { useEffect, useState, useRef } from "react";
import { navData, pages } from "@/data/appData";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button";
import { CgClose } from "react-icons/cg";
import clsx from "clsx";

export default function SideBar() {
  const router = useRouter();
  const pathName = usePathname();
  const _showSideBar = pages?.includes(pathName);
  const accessToken = false;

  const [showSideBar, setShowSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   setShowSideBar(false);
  // }, [pathName]);

  return (
    <>
      {!_showSideBar && (
        <>
          <div className={classes.mainDiv}>
            {!scrolled ? (
              <div className={classes.logo} onClick={handleSideBar}>
                <Image src={"/images/appImages/logo.png"} alt="logo" fill />
              </div>
            ) : (
              <div className={classes.logo} onClick={handleSideBar}>
                <Image
                  src={"/images/appImages/black-logo.png"}
                  alt="logo"
                  fill
                />
              </div>
            )}
          </div>
          <div
            ref={sidebarRef} // Assign ref here
            className={`${classes.sideBarMainDiv} ${
              showSideBar ? classes.show : classes.hide
            }`}
          >
            <div className={classes.navSection}>
              <div className={classes.logoImage}>
                <div className={classes.carImageDiv}>
                  <Image
                    src={"/images/appImages/car.png"}
                    fill
                    alt="carImage"
                  />
                </div>
                <div className={classes.closeIcon} onClick={handleSideBar}>
                  <CgClose color="var(--white-color)" size={22} />
                </div>
              </div>
              <div className={classes.sideBarSubDiv}>
                {navData?.map((e, index) => (
                  <span
                    key={index}
                    onClick={() => router?.push(e?.route)}
                    className={clsx(
                      pathName === e?.route && classes.activeTab,
                      classes.navigation
                    )}
                  >
                    {e?.label}
                  </span>
                ))}
              </div>
            </div>

            {accessToken ? (
              <div className={classes.buttonDiv}>
                <Button label="Logout" variant={"primary"} />
              </div>
            ) : (
              <div className={classes.buttonDiv}>
                <Button
                  label="Signup"
                  onClick={() => router?.push("/signup")}
                  variant={"primary"}
                />
                <Button
                  label="Login"
                  onClick={() => router?.push("/login")}
                  variant={"primary"}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
