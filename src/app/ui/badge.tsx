import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium text-white bg-gray-700 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
