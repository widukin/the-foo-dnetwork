import { useState } from "react";

export default function Dish({ name, description, origin, pictureURL, user }) {
  const [clickClass, setClickClass] = useState("info");
  const [readMore, setReadMore] = useState("Read More");

  const handleInfo = (e) => {
    readMore === "Read More"
      ? setReadMore("Read Less")
      : setReadMore("Read More");

    clickClass === "info"
      ? setClickClass("info-selected")
      : setClickClass("info");
  };
  return (
    <>
      <div className="dishItem">
        <img src={pictureURL} />
        <div className="hoverPanel">
          <h3>{name}</h3>
          <div className="extra">
            <p>
              {" "}
              by {user.name} {user.surname}
            </p>
            <p onClick={handleInfo} className="pointer">
              {" "}
              {readMore}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={clickClass}>
        <div className="close" onClick={handleInfo}>
          Close
        </div>
        <h5>–{origin}</h5>
        <h2>{name}</h2>
        <h4>
          {" "}
          by {user.name} {user.surname}
        </h4>
        <p>{description} </p>

        <div className="imageContainer">
          <img src={pictureURL} />
        </div>
      </div>
    </>
  );
}
