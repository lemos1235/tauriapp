import React from "react";

export default function Sidebar({ onPageChanged }) {
  return (
    <div>
      <div onClick={() => onPageChanged(0)}>home</div>
      <div onClick={() => onPageChanged(1)}>setting</div>
    </div>
  );
}
