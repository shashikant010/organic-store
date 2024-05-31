"use client";
import React from "react";

export function Card() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Card</title>
  <div className="main">
    <div className="card">
      <div className="inner-card">
        <img
          src="https://images.herzindagi.info/image/2023/May/which-leaves-are-offered-to-lord-shiva.jpg"
          height="55%"
          width="95%"
        />
        <h1 className="card-title">Card title</h1>
        <h4 className="card-body">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut aliquam obcaecati vitae fugiat beatae atque vel.
          In voluptatum sapiente similique reiciendis repellat nam, asperiores
          voluptas nostrum quasi aspernatur placeat dolorum alias illum eius
          nesciunt incidunt hic odio voluptatibus a magnam nulla. Porro debitis
          tempore quas itaque omnis officia, similique consequuntur!{" "}
        </h4>
        <button className="card-button">View more</button>
      </div>
    </div>
  </div>
</>

  );
}
