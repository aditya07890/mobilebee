import React from "react";
import image46 from "../../assets/Images/image 46.png";
import image47 from "../../assets/Images/image 47.png";
import image48 from "../../assets/Images/image 48.png";
import image49 from "../../assets/Images/image 49.png";
import { useNavigate } from "react-router-dom";

const Applephone = () => {
  const navigate = useNavigate();
  const applet = [
    {
      id: 1,
      items: [
        {
          id: 1,
          image: image46,
          name: "Apple iPhone 15",
          color: "(Black, 128GB)",
          price: "₹70,999",
          priceof: "₹79,900",
          offer: "11% off",
        },
        {
          id: 2,
          image: image47,
          name: "Apple iPhone 13",
          color: "(Starlight, 128GB)",
          price: "₹52,999",
          priceof: "₹59,900",
          offer: "11% off",
        },
        {
          id: 3,
          image: image48,
          name: "Apple iPhone 14",
          color: "(Blue, 128GB)",
          price: "₹55,999",
          priceof: "₹69,900",
          offer: "19% off",
        },
        {
          id: 4,
          image: image49,
          name: "Apple iPhone 14",
          color: "(Midnight, 128GB)",
          price: "₹58,999",
          priceof: "₹69,900",
          offer: "15% off",
        },
      ],
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-center items-center mb-5">
        <p className="text-3xl font-bold">SHOP BY BRANDS</p>
      </div>

      <div className="flex justify-between items-center border w-full rounded-2xl bg-white p-3 mb-5">
        <p className="px-3 text-2xl font-normal">Apple Smartphone</p>
        <button className="px-5 py-2 bg-cyan-500 text-white font-medium text-2xl rounded-lg">
          VIEW ALL
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {applet[0].items.map((item) => (
          <div
            key={item.id}
            className=" p-3 bg-white flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded-t-lg mb-3"
              onClick={() => navigate("/yourcart")}
            />
            <div className="text-center">
              <p className="font-semibold">{item.name}</p>
              <p>{item.color}</p>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
              <p className="line-through text-gray-500">{item.priceof}</p>
              <p className="text-red-500">{item.offer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applephone;
