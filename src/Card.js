import React from "react";
import "./Card.css";

function Card(props) {
  let profile = props;
  return (
    <div className="cards">
      <div className="left">
        <img src={profile.image} alt="image" />
      </div>
      <div className="right">
        <p>
          <b>Name: </b>
          {profile.name}
        </p>
        <p>
          <b>Phone No: </b>
          {profile.phone}
        </p>
        <p>
          <b>Github link: </b>
          <a href={profile.url} target="_blank">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
