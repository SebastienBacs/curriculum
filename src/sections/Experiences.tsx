import { useEffect, useState } from 'react';

import ExperienceModal from '@/components/experience/ExperienceModal';
import ExperienceInfo from '@/components/experience/ExperienceInfo';
import workExperiences from '@/constants/experiences.json';
import Section from '@/components/Section';
import Text from '@/components/Text';
import Box from '@/components/Box';

const WorkExperience = () => {
  const [imageName, setImageName] = useState('/assets/me/opt_5.webp');
  const [current, setCurrent] = useState<Experience | null>();
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    if (open >= 0) {
      setCurrent(workExperiences[open]);
    } else {
      setTimeout(() => setCurrent(null), 300);
    }
  }, [open]);

  useEffect(() => {
    workExperiences.forEach((exp) => {
      const img = new Image();
      img.src = exp.image;
    });
  }, []);

  return (
    <Section id="experiences">
      <div className="w-full text-white-600">
        <Text Type="h2" weight="semibold" color="bg-title-gradient bg-clip-text text-transparent">
          My work experiences
        </Text>
        <div className="h-1 bg-pattern-packed w-[250px] md:w-[370px] -mb-1"></div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <Box
            padding="p-0"
            className="col-span-2 lg:col-span-1 items-center xl:justify-center max-h-96 lg:max-h-none hidden lg:flex bg-opacity-0">
            {workExperiences.map((exp, index) => (
              <img
                key={index}
                src={exp.image}
                aria-hidden="true"
                className={`sticky xl:static self-start top-20 h-full lg:h-auto ${imageName === exp.image ? 'block' : 'hidden'}`}
              />
            ))}
          </Box>
          <Box className="col-span-2 rounded-lg" variant="bg-pattern-soft" noGap={true}>
            {workExperiences.map((item, index) => (
              <ExperienceInfo key={index} {...item} setImageName={setImageName} setOpen={setOpen} />
            ))}
          </Box>
        </div>
      </div>

      <ExperienceModal open={open} setOpen={setOpen} current={current} />
    </Section>
  );
};

export default WorkExperience;

type Experience = {
  id: number;
  icon: string;
  image: string;
  name: string;
  duration: string;
  durationAmount: string;
  location: string;
  contract: string;
  sector: string;
  type: string;
  pos: string;
  technologies: string[];
  projects: Project[];
  superShortDescriptions: string[];
  shortDescriptions: string[];
  longDescription: string[];
};

type Project = {
  link: string;
  text: string;
};
