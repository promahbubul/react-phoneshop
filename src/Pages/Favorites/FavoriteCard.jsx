import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";

const FavoriteCard = ({ favorite }) => {
  const { id, image, phone_name, brand_name, price, rating } = favorite;

  return (
    <>
      <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border justify-between text-gray-700 shadow-md">
        <div>
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700  shadow-none">
            <img src={image} />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {phone_name}
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {price}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Link className="  px-5 py-3 text-center bg-purple-600 mx-2 text-white text-lg font-bold rounded-md mb-4">
            <button>Add to Card</button>
          </Link>
          <Link className="  px-4 py-3 text-center bg-red-500 mx-2 text-white text-lg font-bold rounded-md mb-4">
            <button>
              <RiDeleteBin2Fill />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
