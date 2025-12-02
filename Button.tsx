import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-200 rounded-full uppercase tracking-wide font-display border-2";
  
  const variants = {
    primary: "bg-[#F7931A] text-white border-black shadow-[3px_3px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-none",
    secondary: "bg-black text-white border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)] hover:bg-slate-900",
    outline: "bg-transparent border-black text-black hover:bg-black hover:text-white",
    ghost: "border-transparent text-[#F7931A] hover:bg-orange-50",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};