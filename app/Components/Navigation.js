"use client";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
//import Link from "next/link";
import { Link as RouterLink } from "next/link";
import Link from "next/link";
import styles from "../styles/navigation.module.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header style={{ backgroundColor: "#7fffd4" }}>
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
                <CloseIcon color="dark" />
              ) : (
                <MenuIcon color="dark" />
              )}
            </button>
          </div>
        </nav>

        {showMenu && (
          <div className="sm:hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Link
                component={RouterLink}
                color="inherit"
                href="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <HomeIcon sx={{ mr: 0.8, color: "black" }} fontSize="inherit" />
                Home
              </Link>

              <Link
                component={RouterLink}
                color="inherit"
                href="/about"
                underline="hover"
                style={{ color: "black" }}
              >
                <KeyboardIcon
                  sx={{ mr: 0.8, color: "black" }}
                  fontSize="inherit"
                />
                About
              </Link>

              <Link
                component={RouterLink}
                href="/contact"
                underline="hover"
                style={{ color: "black" }}
              >
                <ConnectWithoutContactIcon
                  sx={{ mr: 0.8, color: "black" }}
                  fontSize="inherit"
                />
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;
