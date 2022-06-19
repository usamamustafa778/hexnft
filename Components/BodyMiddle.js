import React from "react";
import BodyMiddleTitle from "./BodyMiddleTitle";
import FollowButton from "./FollowButton";
import MintButton from "./MintButton";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function BodyMiddle({ pfp, title }) {
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

        <BodyMiddleTitle title={title} />
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
      <Tweet
        text='perfectly shaped for your pfp ❤️ first 2.5k mints are free all the
        rest are .0069'
        time="29m"
      />
      <Tweet
        text='we will have a total supply of 12345 NFTs in the 
        HEXI collection! the first 2.5k are FREEEEEEE'
        time="31m"
      />
      <Tweet
        text='our ERC721A contract is SUPER optimized
        that means gas is cheap, unlike the gas you put
        in your car 🚗 🚘 🚙'
        time="44m"
      />
      <Tweet
        text="utility? it's literally made for your pfp. that's it.
        come on - you aren't here for utility
        you're a degen, and hexi is 🚀 🌙"
        time="1h"
      />
      <Tweet
        text="roadmap? upon mint completion, the entire hexi holder community will vote on the future of hexi: discord? alpha groups? incubator space for new projects? moon? sun? beyond?
        we'll build together, because we are better together"
        time="3h"
      />
      <Tweet
        text="did you see our guest artists list 👉👉👉
        each artist contributed a few 1/1s to our hexi
        collection. as the cool kids say: LOOKS RARE."
        time="3h"
      />
      <Tweet
        text="there's nothing else down here
        it's not your typical website with a footer
        no footer, just hexi
        wanna know who built the site though?
        @jamesrichardfry did"
        time="40d"
      />
      
    </div>
  );
}

function Tweet({ text, time }) {
  return (
    <div className="flex items-center p-4 border-b border-white/10 text-white">
      <img src="home_pfp.svg" className="h-12 w-12" alt="" />
      <div className="ml-2">
        <div className="flex items-center">
          <h1 className="font-bold">Hexi NFT</h1>
          <h1 className="text-sm text-white/50 ml-3">@HexiNFT - {time}</h1>
        </div>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
