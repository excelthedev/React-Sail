import React, { useState } from "react";
import Details from "./Details";

const Userinfo = () => {
  const [details, setDetails] = useState([
    {
      firstname: "Adeyemi",
      lastname: "Oluwatobiloba Excel",
      email: "tobyadeyy@gmail.com",
      phone: "09065549227",
    },
    {
      firstname: "Adenuga",
      lastname: "Hassan",
      email: "Hassan@gmail.com",
      phone: "09065549227",
    },
    {
      firstname: "Akinyemi",
      lastname: "Micheal",
      email: "akinyemi@gmail.com",
      phone: "09065549227",
    },
    {
      firstname: "Ayuba",
      lastname: "Gbadegbo",
      email: "ayuba@gmail.com",
      phone: "09065549227",
    },
    {
      firstname: "Micheal",
      lastname: "Francis",
      email: "michealf@gmail.com",
      phone: "09065549227",
    },
  ]);

  const infoList = details.map(({ firstname, lastname, email, phone }) => (
    <Details
      allDetails={details}
      No={setDetails}
      firstname={firstname}
      lastname={lastname}
      email={email}
      phone={phone}
    />
  ));

  return <div className="container">{infoList}</div>;
};

export default Userinfo;
