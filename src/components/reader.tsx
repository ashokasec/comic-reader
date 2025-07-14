import React from "react";

const Reader = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-col items-center">
      {images.map((src, index) => (
        <figure key={src} className="relative flex items-center justify-center">
          <img
            src={src}
            alt={`Comic page ${index + 1}`}
            className="w-full max-w-3xl"
          />
          <div className="absolute z-10 text-6xl h-full w-full bg-black/50 text-white flex items-center justify-center">
            {index + 1}
          </div>
        </figure>
      ))}
    </div>
  );
};

export default Reader;
