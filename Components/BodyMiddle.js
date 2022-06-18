import React from "react";
import BodyMiddleTitle from "./BodyMiddleTitle";
import FollowButton from "./FollowButton";
import MintButton from "./MintButton";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function BodyMiddle({ pfp }) {
  return (
    <div className="border-left border-l border-r border-white/10 h-full">
      <img src="banner.png" className="w-full h-46" alt="" />
      <div className="px-4 pb-3 border-b border-white/10">
        <div className="w-full flex justify-between">
          <img
            src={pfp}
            className="-ml-2 w-32 h-32 -mt-16 lg:ml-7 lg:w-36 lg:h-36"
            alt=""
          />
          <FollowButton link="https://twitter.com/hexinft" />
        </div>

        <BodyMiddleTitle title="Hexi NFT" />
        <MintButton />
        <div className="flex text-white/50 mt-3">
          <div className="flex items-center">
            <FmdGoodOutlinedIcon />
            <p className="ml-2">Twitter Blue</p>
          </div>
          <div className="flex items-center ml-5 ">
            <InsertLinkOutlinedIcon />
            <a
              href="https://help.twitter.com/en/using-twitter/twitter-blue-labs"
              className="ml-2"
            >
              Help Desk
            </a>
          </div>
          <div className="flex items-center ml-5 ">
            <CalendarMonthOutlinedIcon />
            <p className="ml-2">Joined Feb 2022</p>
          </div>
        </div>
      </div>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

function Tweet() {
  return (
    <div className="flex items-center p-4 border-b border-white/10 text-white">
      <img src="home_pfp.svg" className="h-12 w-12" alt="" />
      <div className="ml-2">
        <div className="flex items-center">
          <h1 className="font-bold">Hexi NFT</h1>
          <h1 className="text-sm text-white/50 ml-3">@HexiNFT - 29m</h1>
        </div>
        <p>
          perfectly shaped for your pfp ❤️ first 2.5k mints are free all the
          rest are .0069
        </p>
      </div>
    </div>
  );
}
