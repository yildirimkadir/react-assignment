import emailSvg from "./assets/email.svg";
import phoneSvg from "./assets/phone.svg";
import locationSvg from "./assets/location.svg";
import womanSvg from "./assets/growing-up-woman.svg";
import manSvg from "./assets/growing-up-man.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://randomuser.me/api/";

const CardUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [name, setName] = useState([]);
  const [picture, setPicture] = useState("");

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setDataUser(data.results[0]);
      setName(Object.values(data.results[0].name).splice(1).join(" "));
      setPicture(dataUser.picture.large);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(dataUser);

  useEffect(() => {
    getUser();
  }, []);

  const handleClick = () => {
    getUser();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card" style={{ width: "21rem" }}>
        <img className="card-img-top" src={picture} alt="Card image cap" />
        <div className="card-body">
          {/* <h6 className="card-title">Card title</h6> */}
          <p className="card-text text-center">{name}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <img
              className="iconImg me-3"
              src={emailSvg}
              alt="mail"
              id="iconImg"
            />
            {dataUser.email}
          </li>
          <li className="list-group-item">
            <img
              className="iconImg me-3"
              src={phoneSvg}
              alt="mail"
              id="iconImg"
            />
            {dataUser.phone}
          </li>
          <li className="list-group-item">
            <img
              className="iconImg me-3"
              src={locationSvg}
              alt="locationSvg"
              id="iconImg"
            />
            {dataUser.location.street.name}
          </li>
          <li className="list-group-item">
            <img
              className="iconImg me-3"
              src={dataUser.gender === "female" ? womanSvg : manSvg}
              alt="age"
              id="iconImg"
            />
            {dataUser.dob.age}
          </li>
        </ul>
        <div className="card-body text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Get User
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
