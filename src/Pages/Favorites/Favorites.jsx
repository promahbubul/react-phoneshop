import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce(
        (prev, current) => prev + current.price,
        0
      );

      setTotalPrice(total);
    } else {
      setNofound("No data found");
    }
  }, []);

  const handleDelete = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No data found");
  };

  return (
    <>
      <div>
        {favorites.length > 0 && (
          <div>
            <h2>Total: {totalPrice.toFixed(2)}</h2>
            <button
              onClick={() => handleDelete()}
              className="px-5 mb-5 text-white text-lg py-4 bg-red-600 rounded-lg block mx-auto"
            >
              Delete All
            </button>
          </div>
        )}
      </div>
      {noFound ? (
        <p className="flex justify-center items-center h-[70vh]">
          No data found
        </p>
      ) : (
        <div className="grid grid-cols-4 w-full  gap-3">
          {isShowMore
            ? favorites.map((favorite) => (
                <FavoriteCard key={favorite.id} favorite={favorite} />
              ))
            : favorites
                .slice(0, 4)
                .map((favorite) => (
                  <FavoriteCard key={favorite.id} favorite={favorite} />
                ))}
        </div>
      )}
      {favorites.length > 4 && (
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="px-5 mb-5 text-white text-lg py-4 bg-purple-600 mt-10 rounded-lg block mx-auto"
        >
          {isShowMore ? "See less" : "See more"}
        </button>
      )}
    </>
  );
};

export default Favorites;
