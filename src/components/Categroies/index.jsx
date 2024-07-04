import React from "react";
import Iphone from "../../assets/Images/Iphone.png";
import laptop from "../../assets/Images/laptop.png";
import headphone from "../../assets/Images/headphone.png";
import smartphone from "../../assets/Images/smartphone.png";
import samsangS24 from "../../assets/Images/samsangS24.png";
import header from "../../assets/Images/header.png";
import { Card, Divider } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Categories = () => {
  const categoriesCard = [
    {
      id: 1,
      name: "Top Categories to Choose From",
      items: [
        { id: 1, image: Iphone },
        { id: 2, image: laptop },
        { id: 3, image: headphone },
      ],
    },
    {
      id: 2,
      name: "Our Latest Technology blogs",
      items: [
        { id: 1, image: smartphone },
        { id: 2, image: samsangS24 },
      ],
    },
  ];

  return (
    <>
      <div className="flex ">
        <img src={header} alt="header" className="w-full h-auto " />
      </div>

      {categoriesCard.map((category) => (
        <div key={category.id} className="p-5">
          <Divider className="py-5 font-bold">
            <h2 className="text-center font-medium text-5xl">
              {category.name}
            </h2>
          </Divider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {category.items.map((item) => (
              <Card
                key={item.id}
                className="flex justify-center items-center rounded-3xl"
              >
                <img
                  src={item.image}
                  alt="item"
                  className="w-full h-auto rounded-3xl"
                />
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 font-bold bg-slate-300 rounded-2xl m-2 items-center">
        <div className="flex justify-center items-center">
          <p className="text-5xl">Explore Our Full Portfolio</p>
        </div>
        <div className="flex justify-center items-center ">
          <ArrowRightAltIcon className="!container w-10" />
        </div>
        <div className="bg-cyan-400 flex justify-center items-center rounded-2xl p-2">
          <p className="text-4xl">Sign up Today for More</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
