import React from "react";
import image50 from "../../assets/Images/image 50.png";
import image51 from "../../assets/Images/image 51.png";
import image52 from "../../assets/Images/image 52.png";
import image53 from "../../assets/Images/image 53.png";

const SamSung = () => {
  const sumsang = [
    {
      id: 1,
      items: [
        {
          id: 1,
          image: image50,
          name: "SAMSUNG Galaxy F14 5G",
          color: "(GOAT Green, 128GB)",
          price: "₹9,499",
          priceOf: "₹18,490",
          offer: "48% off",
        },
        {
          id: 2,
          image: image51,
          name: "SAMSUNG Galaxy F14 5G",
          color: "(OMG Black, 128GB)",
          price: "₹9,499",
          priceOf: "₹18,490",
          offer: "48% off",
        },
        {
          id: 3,
          image: image52,
          name: "SAMSUNG Galaxy F15 5G",
          color: "(Groovy Violet, 128GB)",
          price: "₹14,499",
          priceOf: "₹16,999",
          offer: "14% off",
        },
        {
          id: 4,
          image: image53,
          name: "SAMSUNG Galaxy F34 5G",
          color: "(Mystic Green, 128GB)",
          price: "₹12,999",
          priceOf: "₹24,490",
          offer: "46% off",
        },
      ],
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-between items-center border w-full rounded-2xl bg-white p-3 mb-5">
        <p className="px-3 text-3xl">Samsung Smartphone</p>
        <button className="px-5 py-2 bg-cyan-500 text-white rounded-lg text-2xl">
          VIEW ALL
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sumsang[0].items.map((item) => (
          <div
            key={item.id}
            className=" p-4 bg-white flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-gray-500 mb-2">{item.color}</p>
            <p className="text-green-600 font-bold mb-2">{item.price}</p>
            <p className="text-gray-500 line-through mb-2">{item.priceOf}</p>
            <p className="text-red-500 font-semibold">{item.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamSung;
