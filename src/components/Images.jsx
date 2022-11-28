import React from "react";
export function Images({ userChoice, computerChoice }) {
  return (
    <div>
      <img src={`../public/images/${userChoice}.png`} alt="" />
      <img src={`../public/images/${computerChoice}.png`} alt="" />
    </div>
  );
}
