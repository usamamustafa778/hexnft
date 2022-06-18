import React from 'react'

export default function MintButton({link}) {
  return (
    <a
      href={link}
      target="_blank"
      className="
         py-6
         px-10 
         h-8
         w-44
         font-semibold 
         text-white 
         flex 
         justify-center
         items-center
         cursor-pointer
         mt-3
         mr-6 
         rounded-full
         text-lg
        bg-myPink hover:text-white
         transition-transform
         "
    >
      <p>Mint Now</p>
    </a>
  )
}
