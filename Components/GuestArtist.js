import React from "react";

export default function guestArtist() {
  return (
    <div className="p-5">
      
      {/* Guest Artist */}
      <div>
      <h1 className="text-xl font-semibold">Guest Artists</h1>
      <Artist
        img="/avatar/a1.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a2.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a3.jpeg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a4.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a5.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a6.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a7.jpg"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a8.png"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      <Artist
        img="/avatar/a9.png"
        name="ILHAM (psychedelic artist)"
        username="@ilham_nft"
        link="#"
      />
      </div>

      {/* Founder Artist */}
      <div className="mt-8">
      <h1 className="text-xl font-semibold">Founder & Artist</h1>
      <Artist
        img="/avatar/a10.png"
        name="James Richard Fry"
        username="@jamesrichardfry"
        link="#"
      />
      </div>
    </div>
  );
}

function Artist({ link, name, username, img }) {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex items-center">
        <img src={img} className="h-10 w-10 rounded-full" alt="" />
        <div className="ml-3">
          <h1>{name}</h1>
          <h1 className="text-white/50 text-sm">{username}</h1>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        className="
         py-2 cursor-pointer 
         px-10 
         w-20
         text-center
         font-semibold 
         text-sm
         flex
         justify-center
         border 
         text-myPink 
         border-myPink 
         rounded-full
         hover:bg-myPink hover:text-white
         transition-transform
         "
      >
        Follow
      </a>
    </div>
  );
}
