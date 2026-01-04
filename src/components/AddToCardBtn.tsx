import React, { type ReactNode, useState } from "react";
import cardIcon from "../assets/icon-cart.svg";
import "./AddToCardBtn.css";

interface AddToCardBtnProps {
  children: ReactNode;
  width?: string;
  bgColor?: string;
  disabled?: boolean;
}

const AddToCardBtn = ({
  children,
  disabled,
  width = "full",
  bgColor,
}: AddToCardBtnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        style={{ width: width }}
        className={`flex items-center justify-center gap-x-2 py-3 rounded-xl shadow-2xl bg-${bgColor} cursor-pointer transition-all duration-300`}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={cardIcon}
          alt="Card Icon"
          className={`w-4 h-4 ${isHovered ? "animate-slide-in" : ""}`}
        />
        <span className="text-white animate-slide-in-text">{children}</span>
      </button>
    </>
  );
};

export default AddToCardBtn;
