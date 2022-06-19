import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapIcon from "@mui/icons-material/Map";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import TwitterIcon from "@mui/icons-material/Twitter";
import MintButton from "./MintButton";

export default function BodyLeft() {
  return (
    <div className="hidden lg:flex flex-col items-start pt-12 pl-20 text-white h-screen sticky left-0 top-0">
      <Link href="/">
        <img src="logo.svg" className="h-7 mix-blend-normal cursor-pointer" alt="" />
      </Link>
      <Link href="/" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <HomeIcon /> Home
        </p>
      </Link>
      <Link href="/about" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <FavoriteIcon /> About
        </p>
      </Link>
      <Link href="/roadmap" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <MapIcon /> Roadmap
        </p>
      </Link>
      <Link href="/mint" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <AutoFixHighIcon /> Mint
        </p>
      </Link>
      <Link href="/smartcontract" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <TipsAndUpdatesIcon /> Smart Contract
        </p>
      </Link>
      <Link href="/guestartist" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <ColorLensIcon /> Guest Artist
        </p>
      </Link>
      <a href="https://twitter.com/hexinft" target="_blank" className="flex items-center">
        <p className="text-lg font-semibold mt-5 cursor-pointer">
          <TwitterIcon /> Twitter
        </p>
      </a>
      <a href="https://opensea.io/collection/hexi" target="_blank" className="flex items-center">
        <p className="text-lg flex items-center font-semibold mt-5 cursor-pointer">
           <img src="opensea.svg" className="h-5 mr-2" alt="" />
           Opensea
        </p>
      </a>
      <a href="https://open.spotify.com/playlist/0xca5KqJGLp1JucHao5sfu?si=4b11f728a19e4dd2" target="_blank" className="flex items-center">
        <p className="text-lg flex items-center font-semibold mt-5 cursor-pointer">
           <img src="spotify.svg" className="h-5 mr-2" alt="" />
           Spotify
        </p>
      </a>
      <br />
      <MintButton/>
    </div>
  );
}
