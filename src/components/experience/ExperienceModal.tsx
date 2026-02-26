import { useState, useEffect } from 'react';
import { faClock, faHourglass, faMap, faHandshake, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import ExperienceTag from '@/components/experience/ExperienceTag';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExperienceModal({ open, setOpen, current }: Prop) {
  const [expanded, setExpanded] = useState(false);
  const { name, icon, durationAmount, location, contract, type, sector, longDescription, technologies, projects } =
    current ?? {};

  useEffect(() => {
    const body = document.body;

    setTimeout(() => {
      setExpanded(false);
    }, 300);

    if (open >= 0) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const currentWorkExperienceContent = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-10 sm:grid-cols-11 sm:grid-rows-3 gap-0.5 h-66 w-full rounded-lg bg-white bg-opacity-5">
          <ExperienceTag text={name} color="text-yellow-500" col="col-span-10" row="flex sm:hidden row-span-1" />
          <div className="col-span-10 sm:col-span-3 sm:row-span-2 bg-black-200 rounded-lg p-2">
            <img className="max-h-40 mx-auto" src={icon} aria-hidden="true" />
          </div>
          <ExperienceTag
            icon={faClock}
            label="Duration"
            text={durationAmount}
            color="text-blue-500"
            col="col-span-5 sm:col-span-4"
            row="row-span-1"
          />
          <ExperienceTag
            icon={faHourglass}
            label="Attendance"
            text={contract}
            color="text-red-500"
            col="col-span-5 sm:col-span-4"
            row="row-span-1"
          />
          <ExperienceTag
            icon={faMap}
            label="Location"
            text={location}
            color="text-green-500"
            col="col-span-5 sm:col-span-4"
            row="row-span-1"
          />
          <ExperienceTag
            icon={faHandshake}
            label="Contract type"
            text={type}
            color="text-yellow-500"
            col="col-span-5 sm:col-span-4"
            row="row-span-1"
          />
          <ExperienceTag text={name} color="text-yellow-500" col="col-span-3" row="hidden sm:flex row-span-1" />
          <ExperienceTag
            icon={faBuilding}
            label="Sector"
            text={sector}
            color="text-purple-500"
            col="col-span-10 sm:col-span-8"
            row="row-span-1"
          />
        </div>
        <div className="flex justify-center gap-2">
          {projects.map((project, index) => (
            <Button
              key={index}
              Tag="a"
              href={project.link}
              target="_blank"
              label={project.text}
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs text-white-600" />}
              position="right"
            />
          ))}
        </div>
        <hr className="border-neutral-800 flex-grow" />
        {/* <div className="flex flex-col gap-1 flex-wrap">
          <Text Type="h5" weight="semibold">
            Technologies used
          </Text>
          <Text color="text-white-600" Type="span">
            {technologies.join(' / ')}
          </Text>
        </div> */}
        <div className="flex flex-col gap-1 flex-wrap">
          <Text Type="h5" weight="semibold">
            Description
          </Text>
          <div className="flex flex-col gap-5">
            <Text color="text-white-600">{longDescription[0]}</Text>

            {expanded &&
              longDescription.slice(1).map((description, index) => (
                <Text key={index} color="text-white-600">
                  {description}
                </Text>
              ))}

            {longDescription.length > 1 && !expanded && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 text-sm self-start hover:underline">
                Read more
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal open={open >= 0} onClose={() => setOpen(-1)} title={current ? current.pos : '-'}>
      {current ? currentWorkExperienceContent() : <></>}
    </Modal>
  );
}

type Prop = {
  open: number;
  setOpen: (key: number) => void;
  current: Experience | null;
};

type Experience = {
  id: number;
  icon: string;
  image: string;
  name: string;
  duration: string;
  durationAmount: string;
  location: string;
  contract: string;
  type: string;
  sector: string;
  pos: string;
  technologies: string[];
  projects: Project[];
  shortDescriptions: string[];
  longDescription: string[];
};

type Project = {
  link: string;
  text: string;
};
