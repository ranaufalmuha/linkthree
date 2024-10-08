'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaReddit,
  FaDribbble,
  FaFacebook,
  FaBehance,
  FaTwitter,
  FaMediumM,
  FaTelegram,
  FaLine,
  FaVk,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface Social {
  icon: string;
  url: string;
}

interface Link {
  name: string;
  image_background: string;
  url: string;
}

export default function Username() {
  const params = useParams();
  const username = params.username;
  const [fullName, setFullName] = useState('John Doe');
  const [photoProfile, setPhotoProfile] = useState();
  const [position, setPosition] = useState(
    'Web3 Developer | Full Stack Engineer'
  );
  const [description, setDescription] = useState(
    'loremasjndaslndaldnal aljksdnalndakls'
  );
  const [social, setSocial] = useState<Social[]>([]);
  const [link, setLink] = useState<Link[]>([]);

  // Social Media
  const iconMapping: { [key: string]: JSX.Element } = {
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
    tiktok: <FaTiktok />,
    reddit: <FaReddit />,
    dribble: <FaDribbble />,
    facebook: <FaFacebook />,
    behance: <FaBehance />,
    twitter: <FaTwitter />,
    medium: <FaMediumM />,
    telegram: <FaTelegram />,
    line: <FaLine />,
    vk: <FaVk />,
  };

  const listSocialMedia = () => {
    setSocial([
      { icon: 'whatsapp', url: 'https://wa.me/your-number' },
      { icon: 'instagram', url: 'https://instagram.com/your-profile' },
      { icon: 'github', url: 'https://github.com/your-profile' },
      { icon: 'linkedin', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'reddit', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'dribble', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'youtube', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'tiktok', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'medium', url: 'https://linkedin.com/in/your-profile' },
      { icon: 'behance', url: 'https://linkedin.com/in/your-profile' },
    ]);
  };

  // Links
  const listLink = () => {
    setLink([
      {
        name: 'My Portfolio',
        image_background:
          'https://img.freepik.com/premium-photo/blockchain-digital-data-transmission-isometric-background-nft-nonfungible-token-concept-3d-illustration_1257429-4593.jpg',
        url: 'https://www.ranaufalmuha.tech/',
      },
      {
        name: 'My Website',
        image_background:
          'https://img.freepik.com/premium-photo/blockchain-digital-data-transmission-isometric-background-nft-nonfungible-token-concept-3d-illustration_1257429-4593.jpg',
        url: 'https://www.ranaufalmuha.tech/',
      },
      {
        name: 'My Blog',
        image_background: '',
        url: 'https://wa.me/your-number',
      },
      {
        name: 'My Research',
        image_background: '',
        url: 'https://wa.me/your-number',
      },
    ]);
  };

  useEffect(() => {
    listSocialMedia();
    listLink();
  }, []);

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col items-center gap-5 max-w-[500px] p-10 overflow-auto h-dvh">
        {/* Profile  */}
        <img
          src="https://cdn.antaranews.com/cache/1200x800/2022/03/19/WhatsApp-Image-2022-03-19-at-09.29.12.jpeg"
          className="w-28 aspect-square object-cover rounded-full"
          alt=""
        />

        {/* Name  */}
        <div className="flex flex-col items-center justify-center gap-2 px-10">
          <p className="text-3xl font-light">{fullName}</p>
          <p className="text-lg font-light text-center">{position}</p>
          <p className="text-sm text-center text-disabled font-light relative line-clamp-2 hover:line-clamp-0">
            {description}
          </p>
          <button className="hover:text-gray-500 text-sm text-center text-disabled">
            See more...
          </button>
        </div>

        {/* Social Media */}
        <div className="grid grid-cols-5 gap-6">
          {social.length > 0 &&
            // Memecah social menjadi grup dengan ukuran 5
            Array.from(
              { length: Math.ceil(social.length / 5) },
              (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="col-span-full flex justify-center gap-6"
                >
                  {social
                    .slice(rowIndex * 5, rowIndex * 5 + 5)
                    .map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-disabled duration-300 hover:text-white text-4xl"
                      >
                        {iconMapping[item.icon] || <div>?</div>}
                      </a>
                    ))}
                </div>
              )
            )}
        </div>

        {/* The Link  */}
        <div className="flex flex-col w-full gap-5 mt-3">
          {link.map((item, index) => (
            <React.Fragment key={index}>
              {item.image_background === '' ? (
                <Link
                  href=""
                  className=" border p-2 border-disabled rounded-full hover:border-white text-disabled hover:text-white duration-300"
                >
                  <p className="text-center ">{item.name}</p>
                </Link>
              ) : (
                <Link
                  href=""
                  className="h-24 rounded-xl bg-gradient-to-r from-purple-900 to-purple-950 flex items-center py-2 px-7 border border-transparent hover:border-white duration-300 relative overflow-hidden"
                >
                  <img
                    src={item.image_background}
                    className="absolute top-0 left-0 object-cover w-full h-full opacity-70"
                    alt=""
                  />
                  <p className="font-medium z-10">{item.name}</p>
                </Link>
              )}
            </React.Fragment>
          ))}
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
