import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const NewAddress = () => {
  const [isDefault, setIsDefault] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 gap-4 justify-center items-center border rounded-lg shadow-md bg-white"
      >
        <p className="text-xl text-center mb-4 flex items-center">
          <LocationOnIcon className="mr-2" />
          Add a new address
        </p>
        <div className="flex gap-2 flex-wrap justify-center mb-4">
          <button type="button" className="bg-gray-200 rounded-lg px-4 py-2">
            Home
          </button>
          <button
            type="button"
            className="bg-cyan-500 text-white rounded-lg px-4 py-2"
          >
            Work
          </button>
          <button type="button" className="bg-gray-200 rounded-lg px-4 py-2">
            Hotel
          </button>
          <button type="button" className="bg-gray-200 rounded-lg px-4 py-2">
            Others
          </button>
        </div>
        <label className="w-full">Full name (First and Last name)</label>
        <input type="text" className="p-2 border rounded w-full" />

        <label className="w-full">Mobile number</label>
        <input type="text" className="p-2 border rounded w-full" />

        <label className="w-full">Pincode</label>
        <input
          type="text"
          placeholder="6 digits [0-9] PIN Code"
          className="p-2 border rounded w-full"
        />

        <label className="w-full">
          Flat, House no., Building, Company, Apartment
        </label>
        <input type="text" className="p-2 border rounded w-full" />

        <label className="w-full">Area, Street, Sector, Village</label>
        <input type="text" className="p-2 border rounded w-full" />

        <label className="w-full">Landmark</label>
        <input
          type="text"
          placeholder="E.g. near Apollo Hospital"
          className="p-2 border rounded w-full"
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label>Town/City</label>
            <input type="text" className="p-2 border rounded w-full" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="p-2 border rounded w-full" />
          </div>
        </div>

        <div className="flex items-start gap-2 mt-2 w-full">
          <Checkbox
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
          />
          <p>Make this my default address</p>
        </div>

        <div className="w-full">
          <p className="mt-4">Delivery instructions (optional)</p>
          <p className="text-sm text-cyan-500">
            Add preferences, notes, access codes, and more
          </p>
        </div>
        <div className="w-full flex justify-start">
          <button
            type="submit"
            className="bg-cyan-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            Add address
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
