import React, { useState } from 'react';
import azuraImg from '../assets/azura.webp';
import panoramaImg from '../assets/panorama.webp';
import patioImg from '../assets/patio.webp';
import LogoPatio from '../assets/logoP.webp';
import LogoAzura from '../assets/logoA.webp';
import LogoPanorama from '../assets/logoPanok.webp';

import mandir from '../assets/mandir.png';
import fishing from '../assets/fishing.png';
import jogging from '../assets/jogging.png';
import playtime from '../assets/playtime.png';
import pond from '../assets/pond.png';
import target from '../assets/target.png';
import walking from '../assets/walking-man.png';
import yoga from '../assets/buddhist-yoga-pose.png';

import swimming from '../assets/swimming-pool.png';
import audience from '../assets/audience.png';
import hall1 from '../assets/hall1.png';
import beachcabana from '../assets/beach-cabana.png';
import console from '../assets/console.png';
import byoga from '../assets/byoga.png';
import openBook from '../assets/open-book.png';
import tennis from '../assets/tennis-racket.png';

import barbeque from '../assets/barbeque.png';
import telescope from '../assets/telescope.png';
import reflexology from '../assets/reflexology.png';
import lounge from '../assets/lounge.png';
import dumbbell from '../assets/dumbbell.png';
import moon from '../assets/moon-gazing.png';
import couple from '../assets/couple.png';
import twin from '../assets/twin-towers.png';

const patioAmenities = [
  { label: 'Mandir', icon: mandir },
  { label: "Kids' Play Area", icon: playtime },
  { label: 'Jogging Track', icon: jogging },
  { label: 'Yoga Deck', icon: yoga },
  { label: 'Natural Water Body', icon: pond },
  { label: 'Elevated Walking Area', icon: walking },
  { label: 'Adda Zone', icon: target },
  { label: 'Fishing Deck', icon: fishing },
];

const azuraAmenities = [
  { label: 'Swimming Pool & Kids Pool', icon: swimming },
  { label: 'AC Community Hall With Party Lawn', icon: hall1 },
  { label: 'Indoor Games Room', icon: console },
  { label: 'Badminton Court', icon: tennis },
  { label: 'Theatre Room', icon: audience },
  { label: 'Landscaped Deck Zone With Cabana', icon: beachcabana },
  { label: 'Yoga & Zumba Room', icon: byoga },
  { label: 'Library & Cards Room', icon: openBook },
];

const panoramaAmenities = [
  { label: 'Barbeque Zone', icon: barbeque },
  { label: 'Telescope Deck', icon: telescope },
  { label: 'Foot Reflexology Walk', icon: reflexology },
  { label: 'Open Lounge', icon: lounge },
  { label: 'Outdoor Gym', icon: dumbbell },
  { label: 'Star Gazing Area', icon: moon },
  { label: "Elders' Adda Zone", icon: couple },
  { label: 'Skydeck - 320ft High', icon: twin },
];

const data = {
  azura: {
    title: 'CLUB AZURA (3RD FLOOR)',
    description:
      'Club Azura offers a vibrant lifestyle with indoor and outdoor recreational facilities, fitness zones, and community spaces designed for relaxation and socializing.',
  },
  panorama: {
    title: 'PANORAMA (ROOF LEVEL)',
    description:
      'Panorama provides breathtaking views and a unique experience with elevated fitness areas, outdoor entertainment spaces, and serene relaxation zones.',
  },
  patio: {
    title: 'PATIO (GROUND FLOOR)',
    description:
      'Patio is designed for tranquility and leisure with natural landscapes, wellness areas, and various activity zones for all ages.',
  },
};

const images = {
  azura: azuraImg,
  panorama: panoramaImg,
  patio: patioImg,
};

function ThreeTierAmenities() {
  const [selected, setSelected] = useState('azura');
  const { title, description } = data[selected];
  const selectedImage = images[selected];

  const getAmenities = () => {
    if (selected === 'patio') return patioAmenities;
    if (selected === 'azura') return azuraAmenities;
    if (selected === 'panorama') return panoramaAmenities;
    return [];
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl text-[#204a63] font-bold text-center mb-6">
        3 Tier Amenities & Facilities
      </h2>


      {/* Logo Selectors -- implemented all logos and set onlick features*/}


      <div className="flex justify-start ml-10 gap-6 mb-6">
        <img
          src={LogoPatio}
          alt="Patio"
          onClick={() => setSelected('patio')}
          className={`h-18 cursor-pointer transition-all rounded-xl px-4 py-2 ${
            selected === 'patio' ? 'bg-[#f3f3f3] shadow-md border-b-3' : ''
          }`}
        />
        <img
          src={LogoAzura}
          alt="Azura"
          onClick={() => setSelected('azura')}
          className={`h-18 cursor-pointer transition-all rounded-xl px-4 py-2 ${
            selected === 'azura' ? 'bg-[#f3f3f3] shadow-md border-b-3' : ''
          }`}
        />
        <img
          src={LogoPanorama}
          alt="Panorama"
          onClick={() => setSelected('panorama')}
          className={`h-18 cursor-pointer transition-all rounded-xl px-4 py-2 ${
            selected === 'panorama' ? 'bg-[#f3f3f3] shadow-md border-b-3' : ''
          }`}
        />
      </div>



      {/* Image + Description + Amenities */}


      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Left: Image */}

        <img
          src={selectedImage}
          alt={title}
          className="rounded shadow-md w-full max-h-[400px] object-cover"
        />

        {/* Right: Content */}

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-[#54595f]" >
            {title}
          </h3>
          <p className="mb-4 text-sm text-[#54595f]">
            {description}
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-4 border border-[#204a63] text-center text-[#204a63]">
            {getAmenities().map((item, i) => (
              <div
                key={i}
                className="border border-[#204a63] p-4 flex flex-col items-center justify-center"
              >
                <img src={item.icon} alt={item.label} className="h-10 mb-2" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeTierAmenities;
