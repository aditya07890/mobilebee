import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircleIcon from "@mui/icons-material/Circle";
import mobilebee from "../../assets/Images/mobilebee.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <div className="lg:grid">
        <div className="flex justify-end gap-3 p-3">
          <button className="font-" onClick={() => navigate("/login")}>
            Login
          </button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="!flex !h-10 !w-10 !justify-center !items-center"
          />
          <button onClick={() => navigate("/register")}>Register</button>
          <button aria-label="Your Cart" onClick={() => navigate("/yourcart")}>
            <ShoppingCartIcon />
            Your Cart
          </button>
        </div>
        <div className="lg:flex lg:justify-between p-4">
          <div className="flex justify-start items-start">
            <img src={mobilebee} alt="mobilebee logo" className="h-16 w-32" />
          </div>
          <div className="hidden lg:flex justify-end items-end gap-5 font-semibold text-2xl">
            <button className="text-cyan-400" onClick={() => navigate("/")}>
              <CircleIcon />
              Home
            </button>
            <button onClick={() => navigate("/product")}>
              Featured Products
            </button>
            <button onClick={() => navigate("/categories")}>
              Shop by Categories
            </button>
          </div>
          <div className="lg:hidden flex justify-end items-end">
            <IconButton onClick={toggleDrawer(true)} aria-label="Open Menu">
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem IconButton onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem IconButton onClick={() => navigate("/product")}>
              <ListItemText primary="Featured Products" />
            </ListItem>
            <ListItem IconButton onClick={() => navigate("/categories")}>
              <ListItemText primary="Shop by Categories" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
