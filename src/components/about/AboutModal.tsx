import { useEffect, useState } from 'react';
import {
  faGamepad,
  faEarth,
  faMusic,
  faCakeCandles,
  faCar,
  faPlane,
  faPhone,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import AboutInfoMe from '@/components/about/AboutInfoMe';
import AboutHobby from '@/components/about/AboutHobby';
import myHobbies from '@/constants/hobbies.json';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import Tabs from '@/components/Tabs';
import Box from '@/components/Box';

const COLOR = {
  red: 'border-red-950',
  green: 'border-green-950',
  yellow: 'border-yellow-950',
  purple: 'border-purple-950',
  blue: 'border-blue-950',
};

const ICON = {
  youtube: faYoutube,
  plane: faPlane,
  gamepad: faGamepad,
  dice: faDiceD20,
  music: faMusic,
};

export default function AboutModal({ open, setOpen }: Prop) {
  const [currentTab, setCurrentTab] = useState('Professional');

  useEffect(() => {
    const body = document.body;

    if (open) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const professionalDescription = () => {
    return (
      <>
        <Text color="text-white-600" extraClass="fade-in">
          As a developer, I tend to strive for perfect optimisation when I get the opportunity to participate in a
          project from scratch. Despite technologies evolving very fast, it is always truly satisfying to discover new
          gems to improve apps! 💎
        </Text>
        <Text color="text-white-600" extraClass="fade-in">
          Discussing development matters and exchanging expertise & tools really is what helps developers grow 🌱.
          Nothing compares to working alongside motivated and friendly fellow devs.
        </Text>
        <Text color="text-white-600" extraClass="fade-in">
          One of my core values in any work environment is transparency and reactivity. Coupled with forged knowledge
          and an open mind for criticism, this approach allows me to get along in any type or size of team.
        </Text>
      </>
    );
  };

  const personalDescription = () => {
    return (
      <>
        <Text color="text-white-600" extraClass="fade-in">
          I am a 30-year-old Belgian guy who barely drinks any beer (boooh! I know, I know, it's heresy) but absolutely
          loves cocktails, especially Piña Coladas 🍹. But that does not mean that I would pass up on drinking one when
          the opportunity arises!
        </Text>
        <Text color="text-white-600" extraClass="fade-in">
          You will find quite some of my hobbies here. But I do love sharing my passions with anyone and am curious by
          nature. Wherever I may be, it is important to me to get along and have fun with the people around me 🎉
        </Text>
        <Text color="text-white-600" extraClass="fade-in">
          A few years ago, along with my girlfriend, we discovered a deep passion for trail running when visiting our
          neighbours in Switzerland, which led us to move from Belgium to France to live near the mountains ⛰️. We are
          lucky enough to live near Lake Léman as well.
        </Text>
      </>
    );
  };

  const hobbiesDescription = () => {
    return myHobbies.map((hobby, index) => {
      return (
        <section key={index} className="flex items-center px-1 fade-in">
          <AboutHobby icon={ICON[hobby.icon]} color={hobby.color} />
          <Box variant={COLOR[hobby.color]} noGap className="bg-opacity-20" padding="px-10 py-3">
            <Text Type="h5" weight="semibold" color="text-white-600" extraClass="mb-1">
              {hobby.title}
            </Text>
            <Text color="text-white-600">{hobby.text}</Text>
          </Box>
        </section>
      );
    });
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} title="Sebastien Bacs">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:mt-3">
          <img
            className="w-1/2 mx-auto mb-3 sm:mb-0 sm:w-1/3 rounded-xl"
            src="assets/about/opt_seb.webp"
            srcSet="
              /assets/about/opt_seb.webp 210w,
              /assets/about/opt_seb-mobile.webp 180w
            "
            aria-hidden="true"
            sizes="210px"
            height="210"
            width="210"
          />
          <div className="flex-grow flex flex-col xs:grid grid-cols-6 grid-rows-3 gap-5 sm:w-2/3 md:pr-2">
            <AboutInfoMe icon={faCakeCandles} col={3} label="Age" info="30 years" />
            <AboutInfoMe icon={faCar} col={3} label="Driver" info="License B" />
            <AboutInfoMe icon={faEarth} col={3} label="Nationality" info="Belgian" />
            <AboutInfoMe icon={faPhone} col={3} label="Phone" info="+33 7 68 13 56 13" />
            <AboutInfoMe icon={faEnvelope} col={6} label="Mail" info="sebastien.bacs1@gmail.com" />
          </div>
        </div>
        <Tabs tabs={['Professional', 'Personal', 'Hobbies']} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 'Professional' ? professionalDescription() : <></>}
        {currentTab === 'Personal' ? personalDescription() : <></>}
        {currentTab === 'Hobbies' ? hobbiesDescription() : <></>}
      </div>
    </Modal>
  );
}

type Prop = {
  open: boolean;
  setOpen: (state: boolean) => void;
};
