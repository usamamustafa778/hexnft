import React from 'react'

export default function MintButton({link}) {
  return (
    <a
      href={link}
      target="_blank"
      className="
         py-7
         px-10 
         h-12
         w-44
         font-semibold 
         text-white 
         flex 
         items-center
         cursor-pointer
         text-center
         mt-6 
         mr-6 
         rounded-full
         text-xl
        bg-myPink hover:text-white
         transition-transform
         "
    >
      <p>Mint Now</p>
    </a>
  )
}
