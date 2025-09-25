import React from "react";

export const QRCode: React.FC = () => {
  return (
    <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
      <div className="grid grid-cols-4 gap-1 w-24 h-24">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 ${
              Math.random() > 0.5 ? "bg-gray-900" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
