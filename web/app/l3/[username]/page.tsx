'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Username() {
  const params = useParams();
  const username = params.username; // get the dynamic username from the URL

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-5 max-w-[500px] p-10">
        {/* Profile  */}
        <img
          src="https://cdn.antaranews.com/cache/1200x800/2022/03/19/WhatsApp-Image-2022-03-19-at-09.29.12.jpeg"
          className="w-28 aspect-square object-cover rounded-full"
          alt=""
        />

        {/* Name  */}
        <div className="flex flex-col items-center justify-center gap-2 px-10">
          <p className="text-3xl font-light">{username}</p>
          <p className="text-lg font-light text-center">
            Web3 Developer | Full Stack Engineer
          </p>
          {/* <div className="flex flex-col gap-1"> */}
          <p className="text-sm text-center text-disabled font-light elative line-clamp-2 hover:line-clamp-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            nulla ab quis dolor sequi deleniti quae eligendi doloremque saepe
            illo!
          </p>
          {/* <button className="hover:text-gray-500 text-sm text-center text-disabled">
              See more...
            </button>
          </div> */}
        </div>

        {/* Social Media  */}
        <div className="flex gap-6">
          <FaWhatsapp className="text-4xl" />
          <FaInstagram className="text-4xl" />
          <FaGithub className="text-4xl" />
          <FaLinkedin className="text-4xl" />
        </div>

        {/* The Link  */}
        <div className="flex flex-col w-full gap-5 mt-3">
          <Link
            href=""
            className="h-24 rounded-xl bg-purple-900 flex items-center px-7"
          >
            <img src="" alt="" />
            <p className="font-medium">My Portfolio</p>
          </Link>
          <Link href="" className=" border p-2 border-disabled rounded-full">
            <p className="text-center text-disabled">My Blog</p>
          </Link>
          <Link href="" className=" border p-2 border-disabled rounded-full">
            <p className="text-center text-disabled">My Research</p>
          </Link>
        </div>

        {/* Quotes  */}
        <div className="max-w-[300px] mt-14">
          <p className="text-center">“Well done is better than well said”</p>
          <p className="text-center">~ Benjamin Franklin</p>
        </div>
      </div>
    </div>
  );
}
