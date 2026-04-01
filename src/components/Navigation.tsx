import React, { useEffect, useState } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import Box from "@mui/joy/Box";

import Divider from "@mui/joy/Divider";
import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemText from "@mui/joy/ListItemContent";

import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { DialogTitle, Link, ModalClose, Sheet, useColorScheme } from "@mui/joy";

const drawerWidth = 240;
const navItems = [
  //["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Publications", "publications"],
  //["History", "history"],
  //["Contact", "contact"],
];

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="md"
      variant="plain"
      color="neutral"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={
        {
          //position: "fixed",
          //zIndex: 999,
          //top: "1rem",
          //left: "1rem",
          //borderRadius: "50%",
          //boxShadow: "sm",
        }
      }
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

function Navigation({ modeChange }: any) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      console.log("Scrolling to:", sectionElement);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${section}" not found`);
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText>{item[0]}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Box
          className="navigation-bar"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <ColorSchemeToggle />
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {navItems.map((item) => (
                <Link key={item[0]} onClick={() => scrollToSection(item[1])}>
                  {item[0]}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <nav>
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <ModalClose />

          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Navigation;
