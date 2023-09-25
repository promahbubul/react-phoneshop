import React from "react";
import { Link, useParams } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

  return (
    <div className="">
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700  border border-gray-300 shadow-sm">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>

        <div className="p-6">
          <p className="text-sm  text-left mb-2">{brand_name}</p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm text-left font-normal leading-normal text-gray-700 antialiased opacity-75">
            {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}>
            <button className="btn bg-green-600 px-10 py-3 rounded-lg text-white" type="button">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
