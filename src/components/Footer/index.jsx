import React from "react";
import mobile from "../../assets/Images/mobile.jpg";
import { Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black lg:h-60 lg:flex lg:justify-around sm:relative">
        <div className="lg:flex items-center">
          {/* Make the image responsive */}
          <img
            src={mobile}
            alt=""
            className="lg:h-[50%] sm:h-auto w-full max-w-full"
          />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="hidden lg:block w-1 bg-white lg:m-5"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-5">
          <div className="lg:flex lg:flex-col justify-center text-white">
            <p className="text-center lg:text-left">Products</p>
            <p className="text-center lg:text-left">Mobile Phone</p>
            <p className="text-center lg:text-left">Laptops</p>
            <p className="text-center lg:text-left">Head Phones</p>
            <p className="text-center lg:text-left">Smart Watches</p>
          </div>
          <div className="lg:flex lg:flex-col justify-center text-white lg:pb-16">
            <p className="text-center lg:text-left">Help</p>
            <p className="text-center lg:text-left">Fax</p>
          </div>
          <div className="lg:flex lg:flex-col justify-center text-white gap-2">
            <p className="text-center lg:text-left">Contact us</p>
            <p className="text-center lg:text-left">+91-9292929292</p>
            <p className="text-center lg:text-left">0120-453-260</p>
            <div className="text-green-500 flex justify-center lg:justify-start lg:grid grid-cols-4 items-center gap-3">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <CircleNotificationsIcon />
              <YouTubeIcon />
              <WhatsAppIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
