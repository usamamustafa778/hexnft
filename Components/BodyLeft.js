import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapIcon from "@mui/icons-material/Map";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function BodyLeft() {
  return (
    <div className="hidden lg:flex flex-col items-start pt-12 pl-24 text-white">
      <Link href="/">
        <img src="logo.svg" className="h-8 mix-blend-normal cursor-pointer mb-4" alt="" />
      </Link>
      <Link href="/" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <HomeIcon fontSize="large" /> Home
        </p>
      </Link>
      <Link href="/about" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <FavoriteIcon fontSize="large" /> About
        </p>
      </Link>
      <Link href="/roadmap" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <MapIcon fontSize="large" /> Roadmap
        </p>
      </Link>
      <Link href="/mint" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <AutoFixHighIcon fontSize="large" /> Mint
        </p>
      </Link>
      <Link href="/smartcontract" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <TipsAndUpdatesIcon fontSize="large" /> Smart Contract
        </p>
      </Link>
      <Link href="/guestartist" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <ColorLensIcon fontSize="large" /> Guest Artist
        </p>
      </Link>
      <a href="https://twitter.com/hexinft" className="flex items-center">
        <p className="text-2xl font-semibold mt-8 cursor-pointer">
          <TwitterIcon fontSize="large" /> Twitter
        </p>
      </a>
    </div>
  );
}
