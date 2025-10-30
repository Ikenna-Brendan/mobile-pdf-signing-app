// components/Button.tsx - Reusable button component
import React from 'react';
import type { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button'
}) => {
  const baseClasses = "button";

  const variantClasses = {
    primary: "",
    secondary: ""
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
