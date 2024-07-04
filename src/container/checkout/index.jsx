import React from "react";
import imageF from "../../assets/Images/imageF.png";
import imageA from "../../assets/Images/imageA.png";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import gpay from "../../assets/Images/gpay.jpg";
import { Radio } from "@mui/material";

const CheckOut = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-xl p-5">
        <p>Checkout</p>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-5">
          <div className="flex flex-col gap-5 border-b pb-5">
            <div className="flex flex-col lg:flex-row gap-5">
              <img src={imageF} alt="Apple iPhone 15" className="w-32 h-40" />
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Apple iPhone 15 (Black, 128GB)</p>
                <p className="text-green-500">In Stock</p>
                <p className="text-gray-400">Eligible for FREE Shipping</p>
                <p className="font-semibold">₹70,999</p>
                <p className="font-semibold">Color: Black</p>
                <p className="font-semibold">Size: 128 GB</p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border rounded-lg p-2">
                    Quantity - 1
                  </button>
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
            </div>
          </div>
          <div className="flex flex-col gap-5 border-b pb-5">
            <div className="flex flex-col lg:flex-row gap-5">
              <img
                src={imageA}
                alt="Apple iPhone 14 Pro"
                className="w-32 h-40"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  Apple iPhone 14 Pro (Deep Purple, 128GB)
                </p>
                <p className="text-green-500">In Stock</p>
                <p className="text-gray-400">Eligible for FREE Shipping</p>
                <p className="font-semibold">₹96,000</p>
                <p className="font-semibold">Color: Deep Purple</p>
                <p className="font-semibold">Size: 128 GB</p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border rounded-lg p-2">
                    Quantity - 1
                  </button>
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
            </div>
          </div>
          <div className="flex flex-col border rounded-lg p-5 m-5">
            <p className="font-semibold">Shipping to</p>
            <p>Office, 305, Floor 05AI</p>
            <p>A block, Sector-65, Noida, 201301 U.P</p>
          </div>
          <div className="flex border rounded-lg m-5 p-5 text-cyan-400 justify-center items-center cursor-pointer">
            <p>Add New Address</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-5">
          <div className="mb-5">
            <p className="font-semibold text-xl">Payment Method</p>
            <p className="text-gray-400">
              Select the payment method you want to use
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <img
                src={image2}
                alt="Credit Card"
                className="w-12 h-12 mr-2 border rounded-lg"
              />
              <label className="ml-2">Credit Card</label>
              <Radio className="ml-auto" />
            </div>
            <div className="flex items-center">
              <img src={image1} alt="PayPal" className="w-12 h-12 mr-2" />
              <label className="ml-2">PayPal</label>
              <Radio className="ml-auto" />
            </div>
            <div className="flex items-center">
              <img src={gpay} alt="Google Pay" className="w-12 h-12 mr-2" />
              <label className="ml-2">Google Pay</label>
              <Radio className="ml-auto" />
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 border rounded-lg flex justify-center items-center mr-2">
                ...
              </div>
              <label className="ml-2">All 15 methods</label>
              <Radio className="ml-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5 border-t pt-5">
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>₹00.00</p>
            </div>
            <div className="flex justify-between">
              <p>Sub Total (2 items)</p>
              <p>₹1,66,999.00</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>₹1,66,999.00</p>
            </div>
          </div>
          <button className="flex justify-center items-center rounded-lg bg-cyan-500 text-white w-1/2 p-2 mt-5 mx-auto">
            Proceed to Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
