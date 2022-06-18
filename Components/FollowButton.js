import React from "react";

export default function FollowButton({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="
         py-1 
         px-6 
         h-10
         font-semibold 
         border 
         text-myPink 
         items-center 
         mt-6 
         mr-6 
         border-myPink 
         rounded-full
         hover:bg-myPink hover:text-white
         transition-transform
         hidden
         lg:flex
         "
    >
      Follow
    </a>
  );
}
