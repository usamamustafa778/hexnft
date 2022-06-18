import React from 'react'
import GuestArtist from "./GuestArtist"

export default function BodyRight() {
  return (
    <div className='text-white'>

      {/* NFT Images */}
      <div className="grid grid-cols-3 grid-rows-2">
        <img src="a1.png" alt="" />
        <img src="a2.png" alt="" />
        <img src="a3.png" alt="" />
        <img src="a4.png" alt="" />
        <img src="a5.png" alt="" />
        <img src="a6.png" alt="" />
      </div>

      {/* Guest Aritsts Links */}
      <GuestArtist/>
    </div>
  )
}
