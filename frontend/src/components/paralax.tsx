import React, { useEffect, useState } from "react";

const ParallaxCard: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 p-5">
        <h2>Sticky Card</h2>
        <p>
          This card will stick to the top of the viewport when you scroll down.
        </p>
      </div>

      <div className="mb-[100vh]">
        <p>Scroll down to see the sticky effect.</p>
      </div>
    </>
  );
};

export default ParallaxCard;
