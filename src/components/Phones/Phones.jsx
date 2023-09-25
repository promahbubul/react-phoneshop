import React from "react";
import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="text-center text-2xl">
      <h2 className="text-xl font-semibold mt-5">All Categories Phones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
