"use client";

import Card from "../Card/index.js";

function CardListing() {
  return (
    <>
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
    </>
  );
}
export default CardListing;
