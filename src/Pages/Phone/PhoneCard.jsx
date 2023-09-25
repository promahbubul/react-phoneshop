import React from "react";
import { Link, json } from "react-router-dom";
import Swal from "sweetalert2";

const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

  const handleAddtoFatorite = () => {
    const addedFavoritesArray = [];
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));

    if (!favoriteItem) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      Swal.fire({
        title: "Success",
        text: "Product Added",
        icon: "success",
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      const isExist = favoriteItem.find((phone) => phone.id === id);

      if (!isExist) {
        addedFavoritesArray.push(...favoriteItem, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));

        Swal.fire({
          title: "Success",
          text: "Product Added",
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          text: "Already Have this data",
          icon: "error",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    }
  };

  return (
    <div>
      <div className="relative  items-center justify-center flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6  space-y-10">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>

          <Link className="inline-block" to="/favorites">
            <button
              onClick={() => handleAddtoFatorite()}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:bg-pink-400 active:bg-pink-500/30  bg-pink-600 text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
