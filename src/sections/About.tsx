import { useState } from 'react';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import AboutModal from '@/components/about/AboutModal';
import PingIcon from '@/components/icons/PingIcon';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Text from '@/components/Text';
import Box from '@/components/Box';

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section id="about">
      <Text Type="h2" weight="semibold" color="bg-title-gradient bg-clip-text text-transparent">
        About me
      </Text>
      <div className="h-1 bg-pattern-packed w-[120px] md:w-44 -mb-1"></div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full text-white mt-12">
        <Box className="col-span-1 xl:row-span-3" variant="bg-pattern-soft">
          <img
            src="assets/about/opt_me.webp"
            aria-hidden="true"
            width="500"
            height="335"
            className="max-w-full object-contain rounded-lg"
          />

          <Text Type="p" extraClass="text-xl" weight="semibold">
            Sebastien Bacs
          </Text>
          <Text color="text-white-600 flex-grow">
            I am a 30-years-old belgian guy with a deep passion for coding, gaming and travelling around the world !
          </Text>
          <Button
            label="See More"
            action={() => setOpen(true)}
            icon={<PingIcon icon={faUser} colorPing="text-red-300" colorText="text-red-400" />}
          />
        </Box>

        <Box className="col-span-1 xl:row-span-3 flex flex-col justify-start gap-2" variant="bg-pattern-soft">
          <img
            src="assets/about/opt_fullstack.webp"
            aria-hidden="true"
            width="500"
            height="335"
            className="max-w-full object-contain rounded-lg"
          />
          <Text Type="p" extraClass="text-xl" weight="semibold">
            Fullstack Developer
          </Text>
          <Text color="text-white-600 flex-grow">
            As a web developer with 6 years of experience ! I specialize in a variety of languages, frameworks and
            tools.
          </Text>
          <a href="files/curriculum.pdf" download="Sebastien Bacs - CV.pdf" tabIndex={-1}>
            <Button
              label="Download Curriculum"
              icon={<PingIcon icon={faDownload} colorPing="text-blue-300" colorText="text-blue-400" />}
            />
          </a>
        </Box>

        <Box className="col-span-1 xl:row-span-3" variant="bg-pattern-soft">
          <img
            src="assets/about/opt_location.webp"
            aria-hidden="true"
            width="500"
            height="335"
            className="max-w-full object-contain rounded-lg"
          />
          <Text Type="p" extraClass="text-xl" weight="semibold">
            Location
          </Text>
          <Text color="text-white-600 flex-grow">
            I recently moved from Belgium to France ! More specificaly in Evian-Les-Bains and I am currently open to new
            opportunities.
          </Text>
          <a href="#contact" tabIndex={-1}>
            <Button
              label="Contact Me"
              icon={<PingIcon icon={faEnvelope} colorPing="text-yellow-300" colorText="text-yellow-400" />}
            />
          </a>
        </Box>
      </div>

      <AboutModal open={open} setOpen={setOpen} />
    </Section>
  );
};

export default About;
