"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header style={{ backgroundColor: "cyan" }}>
        <nav className="fixed top-0 w-full flex justify-between p-4 bg-slate-200">
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              style={{
                position: "fixed",
                top: "0",
                right: "0",
                margin: "10px",
              }}
            >
              {showMenu ? (
                <CloseIcon color="secondary" />
              ) : (
                <MenuIcon color="secondary" />
              )}
            </button>
          </div>
        </nav>

        {showMenu && (
          <div className="sm:hidden">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <li>
                <Link className="block py-2 text-lg" href="/">
                  <HomeIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-lg" href="/about">
                  <KeyboardIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                  About
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-lg" href="/contact">
                  <ConnectWithoutContactIcon
                    sx={{ mr: 0.8 }}
                    fontSize="inherit"
                  />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;
