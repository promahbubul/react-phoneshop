import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState();

  const { id } = useParams();
  const phones = useLoaderData();
  // console.log(phones);
  // console.log(id);

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id == id);
    setPhone(findPhone);
  }, [id, phones]);

  return (
    <>
      <PhoneCard phone={phone} />
    </>
  );
};

export default Phone;
