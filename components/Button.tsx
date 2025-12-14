import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'minimal';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 rounded-full uppercase tracking-widest text-sm font-medium transition-all duration-500 ease-out transform hover:scale-105 active:scale-95";
  
  const variants = {
    // brand-gold is now light (#E8D1C5), so text must be dark
    primary: "bg-brand-gold text-brand-dark hover:bg-white hover:shadow-[0_0_20px_rgba(232,209,197,0.4)]",
    outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark",
    minimal: "text-white hover:text-brand-gold underline-offset-4 hover:underline px-0"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};