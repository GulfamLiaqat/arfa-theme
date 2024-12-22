// @ts-nocheck
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const Horizontalloop = () => {
  return (
    <section className="horizontal-loop marquee-section">
      <div className="scrolling-text">
        <Marquee>
          <div className="text marquee_item">
            Web Design <span>&</span> Development Agency <span>|</span>{" "}
          </div>
          <div className="text marquee_item">
            Web Design <span>&</span> Development Agency <span>|</span>{" "}
          </div>
          <div className="text marquee_item">
            Web Design <span>&</span> Development Agency <span>|</span>{" "}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Horizontalloop;
