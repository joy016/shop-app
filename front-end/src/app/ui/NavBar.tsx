"use client";

import { AppBar, Box, IconButton } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { DarkModeIcon, LightModeIcon, ShoppingCartIcon } from "../icons/Icons";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const CENTER_LABEL = [
  { label: "SHOP", link: "/products" },
  { label: "ABOUT", link: "/about" },
  { label: "CONTACT", link: "/contact" },
];
const RIGHT_LABEL = [
  { label: "LOGIN", link: "/user/login" },
  { label: "REGISTER", link: "/user/signup" },
];

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
const NavBar = () => {
  const [lightMode, setLightMode] = useState(false);

  const onModeChange = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <AppBar position="static" sx={{ padding: "1.5rem 2rem" }} color="secondary">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/blog" style={{ fontWeight: "700", fontSize: "1.3rem" }}>
            Olivia' Shop
          </Link>
          <IconButton
            aria-label={lightMode ? "lightmode" : "darkmode"}
            onClick={onModeChange}
          >
            {lightMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {CENTER_LABEL.map((label) => (
            <Link
              href={label.link}
              key={label.label}
              style={{ fontWeight: "700", fontSize: "1.3rem" }}
            >
              {label.label}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <IconButton>
            <ShoppingCartIcon fontSize="medium" />
            <CartBadge badgeContent={2} color="primary" overlap="circular" />
          </IconButton>
          {RIGHT_LABEL.map((label) => (
            <Link
              href={label.link}
              key={label.label}
              style={{ fontWeight: "700", fontSize: "1.3rem" }}
            >
              {label.label}
            </Link>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
