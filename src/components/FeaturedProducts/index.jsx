import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Screenshot1 from "../../assets/Images/Screenshot1.png";
import Screenshot2 from "../../assets/Images/Screenshot2.png";
import { ProductList } from "../../pages";
import Header from "../Header/Header";
import Footer from "../Footer";

const Product = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 p-4">
        <div className="flex justify-end items-center p-2 relative">
          <TextField
            placeholder="Search for products, brands and more"
            className="!w-full !sm:w-3/4 !lg:w-1/2"
            size="small"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={Screenshot1}
            alt="Screenshot 1"
            className="w-full h-auto object-cover"
          />
          <img
            src={Screenshot2}
            alt="Screenshot 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
