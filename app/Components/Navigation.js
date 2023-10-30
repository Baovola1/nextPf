"use client";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "next/link";
//import Link from "next/link";

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
            <Box
              sx={{
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
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HomeIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                Home
              </Link>

              <Link
                component={RouterLink}
                color="inherit"
                href="/about"
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyboardIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                About
              </Link>

              <Link
                component={RouterLink}
                color="inherit"
                href="/contact"
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ConnectWithoutContactIcon
                  sx={{ mr: 0.8 }}
                  fontSize="inherit"
                />
                Contact
              </Link>
            </Box>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;
