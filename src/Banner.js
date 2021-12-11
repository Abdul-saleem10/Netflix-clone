import React, { useEffect, useState } from "react";
// import axios from "./axios";
// import requests from "./requests";

import moneyheistimg from "./images/moneyhesistcover.jpg";
import squidgamesimg from "./images/squidgamescoverimg.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState("");
  const [data] = useState([
    {
      id: 0,
      name: "Money Hesit",
      img: moneyheistimg,
      overview:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    },
    {
      id: 1,
      name: "Squid Games",
      img: squidgamesimg,
      overview:
        "Hundreds of cash-strapped players accept a strange invitation tocompete in childrens games. Inside, a tempting prize awaits —with deadly high stakes.",
    },
  ]);

  useEffect(() => {
    console.log(
      data.find((e) => e.id === Math.floor(Math.random() * data.length))
    );
    setMovie(
      data.find((e) => e.id === Math.floor(Math.random() * data.length)) ===
        undefined
        ? data.find((e) => e.id === Math.floor(Math.random() * data.length))
        : data.find((e) => e.id === 0)
    );
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="bannerhome"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie.img})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name}</h1>

        <div className="banner_buttons">
          <Link
            className="banner_button"
            to={{ pathname: "/movie", state: movie.name }}
          >
            Play
          </Link>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="bannerhome--fadeBottom"></div>
    </header>
  );
}

export default Banner;
