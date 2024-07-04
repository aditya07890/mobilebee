import React from "react";
import image54 from "../../assets/Images/image 54.png";
import image55 from "../../assets/Images/image 55.png";
import image56 from "../../assets/Images/image 56.png";
import image57 from "../../assets/Images/image 57.png";

const Realme = () => {
  const realmephone = [
    {
      id: 1,
      items: [
        {
          id: 1,
          image: image54,
          name: "realme 12x 5G (Woodland Green, 128GB)",
          price: "₹13,499",
          priceOf: "₹17,999",
          offer: "25% off",
        },
        {
          id: 2,
          image: image55,
          name: "realme C55 5G (Rainforest, 64GB)",
          price: "₹8,999",
          priceOf: "₹13,999",
          offer: "35% off",
        },
        {
          id: 3,
          image: image56,
          name: "realme 12 5G (Twilight Purple, 128GB)",
          price: "₹16,999",
          priceOf: "₹19,999",
          offer: "15% off",
        },
        {
          id: 4,
          image: image57,
          name: "realme C53 5G (Champion Black, 128GB)",
          price: "₹9,499",
          priceOf: "₹13,999",
          offer: "32% off",
        },
      ],
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-between items-center border w-full rounded-2xl bg-white p-3 mb-5">
        <p className="px-3 text-3xl ">Realme Smartphone</p>
        <button className="px-5 py-2 bg-cyan-500 text-white rounded-lg text-2xl font-medium">
          VIEW ALL
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {realmephone[0].items.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-green-600 font-bold mb-2">{item.price}</p>
            <p className="text-gray-500 line-through mb-2">{item.priceOf}</p>
            <p className="text-red-500 font-semibold">{item.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realme;
