import React from "react";

export default function BodyMiddleTitle({ title }) {
  return (
    <div className="text-white mt-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center mt-2 text-white/50">
        <h1 className="text-lg">@HexiNFT</h1>
        <h1 className="text-sm ml-4">Follows You</h1>
      </div>
      <p className="mt-2">
        12345 perfectly shaped nfts for your pfp ❤️ first 2500 mints are free;
        all the rest are .0069E
      </p>
    </div>
  );
}
