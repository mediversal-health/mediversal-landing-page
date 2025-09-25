import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
}) => {
  const paddings = {
    sm: "p-0",
    md: "p-0",
    lg: "p-0",
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
