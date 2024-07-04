import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Rating, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import image58 from "../../assets/Images/image 58.png";
import image59 from "../../assets/Images/image 59.png";
import image62 from "../../assets/Images/image 62.png";
import image63 from "../../assets/Images/image 63.png";
import image64 from "../../assets/Images/image 64.png";
import imageA from "../../assets/Images/imageA.png";
import imageB from "../../assets/Images/imageB.png";
import imageC from "../../assets/Images/imageC.png";
import imageE from "../../assets/Images/imageE.png";
import imageF from "../../assets/Images/imageF.png";

const YourCart = () => {
  const [search, setSearch] = useState("");
  const products = [
    {
      id: 1,
      items: [
        {
          id: 1,
          image: imageF,
          name: "Apple iPhone 15",
          color: "(Black, 128GB)",
          price: "₹70,999",
          priceOf: "₹79,900",
          offer: "11% off",
        },
        {
          id: 2,
          image: imageE,
          name: "Apple iPhone 13",
          color: "(Starlight, 128GB)",
          price: "₹52,999",
          priceOf: "₹59,900",
          offer: "11% off",
        },
        {
          id: 3,
          image: imageC,
          name: "Apple iPhone 14",
          color: "(Blue, 128GB)",
          price: "₹55,999",
          priceOf: "₹69,900",
          offer: "19% off",
        },
        {
          id: 4,
          image: imageB,
          name: "Apple iPhone 14",
          color: "(Midnight, 128GB)",
          price: "₹58,999",
          priceOf: "₹69,900",
          offer: "15% off",
        },
        {
          id: 5,
          image: imageA,
          name: "Apple iPhone 14 Pro",
          color: "(Deep Purple, 128GB)",
          price: "₹96,000",
          priceOf: "₹1,10,000",
          offer: "15% off",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-end items-center gap-2 p-2">
        <p className="flex items-center gap-1">
          <ShoppingCartIcon />
          Your Cart
        </p>
      </div>
      <div className="flex justify-end items-center rounded-lg p-5 relative">
        <TextField
          placeholder="Search for products, brands and more"
          className="p-2 w-full text-xl font-normal"
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 p-5">
        <div className="grid gap-1 p-2 w-full lg:w-1/5">
          <img src={image59} alt="Product 59" className="object-cover" />
          <img src={image64} alt="Product 64" className="object-cover" />
          <img src={image62} alt="Product 62" className="object-cover" />
          <img src={image63} alt="Product 63" className="object-cover" />
        </div>
        <div className="grid w-full lg:w-1/2">
          <img
            src={image58}
            alt="Main Product"
            className="h-auto w-72 mx-auto object-cover"
          />
          <div className="flex justify-between mt-2">
            <button
              className="bg-cyan-500 p-2 rounded-2xl h-11 text-lg"
              type="button"
            >
              ADD TO CART
            </button>
            <button
              className="bg-zinc-400 p-2 rounded-2xl h-11 text-lg"
              type="button"
            >
              BUY NOW
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <p className="font-normal text-3xl">
            Apple iPhone 15 (128 GB) - Black
          </p>
          <p className="font-normal text-xl">
            Good, 6 GB / 128 GB, Deep Purple
          </p>
          <Rating name="read-only" value={5} readOnly />
          <div className="flex items-center gap-5">
            <p className="text-red-400 text-2xl font-light">-11%</p>
            <p className="font-light text-2xl">₹71,290</p>
          </div>
          <p className="flex items-center text-gray-400 text-lg">
            M.R.P:<span className="line-through text-black">₹79,000</span>
          </p>
          <p className="font-normal">Inclusive of all taxes</p>
          <div className="flex items-center gap-2">
            <p>EMI starts at ₹3,456. No Cost EMI available.</p>
            <a href="#emi-options" className="text-cyan-400">
              EMI options
            </a>
          </div>
          <p className="text-gray-500">Free Delivery * COD Available</p>
          <div className="flex justify-between font-normal">
            <p>Brand</p>
            <p>Apple</p>
          </div>
          <div className="flex justify-between font-normal">
            <p>Model Name</p>
            <p>iPhone 15</p>
          </div>
          <div className="flex justify-between font-normal">
            <p>Operating System</p>
            <p>iOS</p>
          </div>
          <div className="flex justify-between font-normal">
            <p>Cellular Technology</p>
            <p>5G</p>
          </div>
          <div className="mt-5">
            <h2 className="font-medium p-2">Product Description</h2>
            <p className="flex justify-normal font-light">
              Experience the iPhone 15 – your dynamic companion. Dynamic Island
              ensures you stay connected, bubbling up alerts seamlessly while
              you're busy. Capture life with precision using the 48 MP Main
              Camera, perfect for any shot. Plus, it's USB-C compatible,
              simplifying your charging needs. Elevate your tech game with the
              iPhone 15 – innovation at your fingertips. Goodbye cable clutter,
              hello convenience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-5">
        <p className="font-normal text-2xl">Similar Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products[0].items.map((item) => (
            <div key={item.id} className="p-4 bg-white flex flex-col font-bold">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover mb-4"
              />
              <h3 className="mb-2">{item.name}</h3>
              <p className="mb-2">{item.price}</p>
              <p className="text-gray-500 line-through mb-2">{item.priceOf}</p>
              <p className="text-green-500 font-semibold">{item.offer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourCart;
