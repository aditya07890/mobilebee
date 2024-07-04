import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider } from "@mui/material";
import imageF from "../../assets/Images/imageF.png";
import imageA from "../../assets/Images/imageA.png";

const MyOrder = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-2 p-5">
        <p className="flex items-center gap-1">
          <ShoppingCartIcon />
          Your Cart
        </p>
      </div>
      <p className="flex justify-center items-center gap-5 p-2 font-semibold text-xl">
        My Order
      </p>
      <div className="flex justify-between p-2 m-2">
        <p className="font-bold text-xl">Shopping Cart</p>
        <p>Price</p>
      </div>
      <Divider />
      <div className="flex flex-col p-2">
        <div className="flex justify-between items-center p-5">
          <div className="flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center w-full">
            <img src={imageF} alt="Apple iPhone 15" className="w-32 h-40" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Apple iPhone 15 (Black, 128GB)</p>
              <p className="text-green-500">In Stock</p>
              <p className="text-gray-400">Eligible for FREE Shipping</p>
              <p className="font-semibold">Color: Black</p>
              <p className="font-semibold">Size: 128 GB</p>
              <div className="flex gap-2 flex-wrap">
                <button className="border rounded-lg p-2">Quantity - 1</button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Delete
                </button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Save for later
                </button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Share
                </button>
              </div>
            </div>
            <p className="font-semibold lg:ml-auto">₹70,999</p>
          </div>
        </div>
        <Divider />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex justify-between items-center p-5">
          <div className="flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center w-full">
            <img src={imageA} alt="Apple iPhone 14 Pro" className="w-32 h-40" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Apple iPhone 14 Pro (Deep Purple, 128GB)
              </p>
              <p className="text-green-500">In Stock</p>
              <p className="text-gray-400">Eligible for FREE Shipping</p>
              <p className="font-semibold">Color: Deep Purple</p>
              <p className="font-semibold">Size: 128 GB</p>
              <div className="flex gap-2 flex-wrap">
                <button className="border rounded-lg p-2">Quantity - 1</button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Delete
                </button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Save for later
                </button>
                <button className="border rounded-lg p-2 text-cyan-400">
                  Share
                </button>
              </div>
            </div>
            <p className="font-semibold lg:ml-auto">₹96,000</p>
          </div>
        </div>
        <Divider />
      </div>
      <div className="flex flex-col justify-between items-end p-2 gap-2 mx-5">
        <p className="flex justify-end items-end font-semibold">
          Subtotal (2 items): ₹1,66,999.00
        </p>
        <button className="text-white bg-cyan-500 mx-5 h-8 w-44 rounded-2xl">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default MyOrder;
