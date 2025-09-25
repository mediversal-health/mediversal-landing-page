import React from "react";
import { Play } from "lucide-react";

interface PlayButtonProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  onClick,
  size = "md",
}) => {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group`}
    >
      <Play className="h-6 w-6 text-primary-500 ml-1 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
};
