import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faClose, faUser, faTimeline, faComment, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import NavMenuLink from '@/components/nav/NavMenuLink';
import NavLink from '@/components/nav/NavLink';
import Corner from '@/components/Corner';
import Shape from '@/components/Shape';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative h-4 md:h-16 w-full md:w-[600px] mx-auto bg-background rounded-home-radius flex items-center justify-center">
      <Corner side="top-right" className="top-[31px] -left-[19px] hidden md:block" />
      <Corner side="top-left" className="top-[31px] -right-[19px] hidden md:block" />

      <div className="hidden md:flex w-2/5 justify-center">
        <NavLink href="#about" text="About" active={activeSection === 'about'} />
        <NavLink href="#experiences" text="Experiences" active={activeSection === 'experiences'} />
      </div>

      <div className="w-[15%] pt-7 hidden md:block">
        <a href="#home" aria-label="home button" className="flex justify-center">
          <Shape type="hexagon" size={70} borderWidth="p-2">
            <FontAwesomeIcon icon={faHome} />
          </Shape>
        </a>
      </div>

      <div className="flex w-full justify-center pt-8 md:hidden z-20">
        <div className="relative w-auto h-auto">
          <Shape type="hexagon" size={50} borderWidth="p-1" extraClass="block md:hidden relative" action={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} />
          </Shape>
          <Corner side="top-right" className="top-4 -left-[15px]" />
          <Corner side="top-left" className="top-4 -right-[15px]" />
        </div>
      </div>

      <div className="hidden md:flex w-2/5 justify-center">
        <NavLink href="#projects" text="Projects" active={activeSection === 'projects'} />
        <NavLink href="#contact" text="Contact" active={activeSection === 'contact'} />
      </div>

      <div
        className="absolute z-10 top-4 left-0 right-0 bg-background transition-all duration-300 block md:hidden overflow-hidden"
        style={{ height: isOpen ? '330px' : 0 }}>
        <div className="w-full h-full flex flex-col pt-12 gap-2 text-white-600">
          <div className="px-8">
            <hr className="border-dashed border-white-500 w-full" />
          </div>
          <div className="flex flex-col gap-1" onClick={closeMenu}>
            <NavMenuLink href="#home" text="Home" icon={faHome} />
            <NavMenuLink href="#about" text="About" icon={faUser} />
            <NavMenuLink href="#experiences" text="Experience" icon={faTimeline} />
            <NavMenuLink href="#projects" text="Projects" icon={faBriefcase} />
            <NavMenuLink href="#contact" text="Contact" icon={faComment} />
          </div>
          <div className="px-8">
            <hr className="border-dashed border-white-500 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
