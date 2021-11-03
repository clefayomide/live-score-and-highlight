import React from "react";

const Card = ({ highlight }) => {
  var { thumbnail, competition, date, title } = highlight;
  return (
    <>
      <section
        className="card"
        style={{
          backgroundImage: `linear-gradient(
        115deg,
        rgba(58, 58, 100, 0.8),
        rgba(106, 106, 60, 0.7)
      ),url(${thumbnail})`,
        }}
      >
        <h2 className="competition-" style={{ fontSize: "14px" }}>
          {competition.toLowerCase()}
        </h2>
        <p className="date" style={{ fontWeight: "bolder" }}>
          {date.substring(0, 10)} <br />
        </p>
        <p className="club-name">{title}</p>
      </section>
    </>
  );
};

export default Card;