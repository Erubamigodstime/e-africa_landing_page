'use client';
import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from '../lib/definition';




export default function Button({
  label,
  size = 'md', 
  bgColor = 'bg-[#13672B]', 
  textColor = 'text-white',
  hoverColor = 'hover:bg-[#0f4a1a]',
  onClick,
  type = 'button',

}: ButtonProps){
   const baseClasses = 'rounded-xl font-semibold transition duration-200 focus:outline-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
    return(
      <button
        type={type}
        onClick={onClick}
        className={clsx(baseClasses, sizeClasses[size], bgColor, textColor, hoverColor)}
      >
        {label}
      </button>
    )
}
  