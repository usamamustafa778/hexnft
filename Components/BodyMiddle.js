import React from "react";
import BodyMiddleTitle from "./BodyMiddleTitle";
import FollowButton from "./FollowButton";
import MintButton from "./MintButton";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function BodyMiddle({ pfp }) {
  return (
    <div className="border-left border-l border-r border-white/10 h-screen">
      <img src="banner.png" className="w-full h-46" alt="" />
      <div className="px-4 pb-5 border-b border-white/10">
        <div className="w-full flex justify-between">
          <img src={pfp} className="-ml-2 w-32 h-32 -mt-16 lg:ml-7 lg:w-40 lg:h-40 lg:-mt-20" alt="" />
          <FollowButton link="https://twitter.com/hexinft" />
        </div>

        <BodyMiddleTitle title="Hexi NFT" />
        <MintButton />
        <div className="flex text-white/50 mt-5">
          <div className="flex items-center">
            <FmdGoodOutlinedIcon />
            <p className="ml-2">Twitter Blue</p>
          </div>
          <div className="flex items-center ml-5 ">
            <InsertLinkOutlinedIcon />
            <a href="https://help.twitter.com/en/using-twitter/twitter-blue-labs" className="ml-2">Help Desk</a>
          </div>
          <div className="flex items-center ml-5 ">
            <CalendarMonthOutlinedIcon />
            <p className="ml-2">Joined Feb 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
