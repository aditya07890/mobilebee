import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import image103 from "../../assets/Images/image103.png";
import imageA from "../../assets/Images/imageA.png";
import imageB from "../../assets/Images/imageB.png";
import imageC from "../../assets/Images/imageC.png";
import imageE from "../../assets/Images/imageE.png";
import imageF from "../../assets/Images/imageF.png";

const CartEmpty = () => {
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
      <div className="flex justify-end items-end gap-5 p-5">
        <p className="flex items-center gap-2">
          <ShoppingCartIcon />
          Your Cart
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        <img src={image103} alt="Empty Cart" className="w-56 h-48" />
        <div className="p-8">
          <p className="font-normal text-4xl">Your Cart is empty</p>
          <p className="text-green-600 font-normal text-2xl">
            Shop today's deals
          </p>
          <button className="bg-cyan-500 text-lg rounded-lg p-2 mt-2">
            Sign in to your account
          </button>
          <button className="bg-gray-500 text-lg rounded-lg p-2 mt-5 m-5">
            Sign up now
          </button>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-5">
        <p className="font-normal text-2xl">Your recently viewed items</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products[0].items.map((item) => (
            <div key={item.id} className="p-4 bg-white flex flex-col font-bold">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52  mb-4"
              />
              <h3 className="mb-2">{item.name}</h3>
              <p className=" mb-2">{item.price}</p>
              <p className="text-gray-500 line-through mb-2">{item.priceOf}</p>
              <p className="text-green-500">{item.offer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
