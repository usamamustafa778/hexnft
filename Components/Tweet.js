import React from "react";

export default function Tweet({text, time}) {
  return (
    <div className="flex items-center p-4 border-b border-white/10 text-white">
      <img src="home_pfp.svg" className="h-12 w-12" alt="" />
      <div className="ml-2">
        <div className="flex items-center">
          <h1 className="font-bold">Hexi NFT</h1>
          <h1 className="text-sm text-white/50 ml-3">@HexiNFT - {time}</h1>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
