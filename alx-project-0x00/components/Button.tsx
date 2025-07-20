import React from 'react';
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className = '', size = 'medium', shape = 'rounded-md' }) => {

  let baseStyles = "px-4 py-2 border text-white transition-colors duration-200 bg-blue-500 hover:bg-blue-600";

  // Apply size styles
  if (size === 'small') {
    baseStyles += " text-sm";
  } else if (size === 'large') {
    baseStyles += " text-lg px-6 py-3";
  } else { // medium
    baseStyles += " text-base px-4 py-2";
  }

  // Apply shape styles
  if (shape === 'rounded-sm') {
    baseStyles += " rounded-sm";
  } else if (shape === 'rounded-full') {
    baseStyles += " rounded-full";
  } else {
    baseStyles += " rounded-md";
  }

  const finalClassName = `${baseStyles} ${className}`;

  return (
    <button className={finalClassName}>
      {title}
    </button>
  );
}

export default Button;