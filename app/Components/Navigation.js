"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
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
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-lg" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="block py-2 text-lg" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navigation;
