import { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ProjectMockup from '@/components/project/ProjectMockup';
import ProjectButton from '@/components/project/ProjectButton';
import ProjectLink from '@/components/project/ProjectLink';
import ProjectTech from '@/components/project/ProjectTech';
import myProjects from '@/constants/projects.json';
import Section from '@/components/Section';
import Text from '@/components/Text';
import Box from '@/components/Box';

const projectCount = myProjects.length;

const projects = [
  '/assets/video/devbase.mp4',
  '/assets/video/platato.mp4',
  '/assets/video/finwork.mp4',
  '/assets/video/sciensano.mp4',
];

const FLIP_DURATION = 500;
const HALF_FLIP = FLIP_DURATION / 2;

const Projects = () => {
  const [flipCount, setFlipCount] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

  useEffect(() => {
    setSelectedProjectIndex(((flipCount % projectCount) + projectCount) % projectCount);
  }, [flipCount]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const safeIndex = ((flipCount % projects.length) + projects.length) % projects.length;
      setVisibleVideoIndex(safeIndex);
    }, HALF_FLIP);

    return () => clearTimeout(timeout);
  }, [flipCount]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <Section id="projects">
      <Text Type="h2" weight="semibold" color="bg-title-gradient bg-clip-text text-transparent">
        My selected work
      </Text>
      <div className="h-1 bg-pattern-packed w-[210px] md:w-[310px] -mb-1"></div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <Box
          variant="bg-black shadow-xl shadow-black-200 lg:min-h-[810px] xl:min-h-[655px]"
          borders={false}
          padding="md:p-10 p-5">
          <div className="absolute top-0 right-0 pointer-events-none select-none">
            <img src={currentProject.spotlight} aria-hidden="true" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg hidden sm:block"
            style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div key={selectedProjectIndex} className="flex flex-col flex-grow gap-5 text-white-600 my-5 z-10">
            <Text Type="h3" weight="semibold" extraClass="fade-in">
              {currentProject.title}
            </Text>

            <Text color="text-white-600" extraClass="hidden sm:block fade-in">
              {currentProject.desc}
            </Text>
            <Text color="text-white-600" extraClass="hidden sm:block fade-in">
              {currentProject.subdesc}
            </Text>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <ProjectTech key={index} {...tag} />
              ))}
            </div>

            <ProjectLink {...currentProject} />
          </div>

          <div className="flex justify-between items-center sm:mt-7 z-10">
            <ProjectButton icon={faArrowLeft} ariaLabel="previous project" action={() => setFlipCount(flipCount - 1)} />
            <ProjectButton icon={faArrowRight} ariaLabel="next project" action={() => setFlipCount(flipCount + 1)} />
          </div>
        </Box>

        <Box
          className="min-h-[200px] xs:min-h-[300px] sm:min-h-[500px] items-center justify-center"
          variant="bg-pattern-soft"
          padding="sm:p-2 p-0">
          <div
            style={{
              transform: `rotateY(${(flipCount * 180) % 360}deg)`,
            }}
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out">
            <ProjectMockup source={projects[visibleVideoIndex]} order={visibleVideoIndex} display={true} />
          </div>
        </Box>
      </div>
    </Section>
  );
};

export default Projects;
