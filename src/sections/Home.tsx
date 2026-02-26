import { useState, useEffect, lazy, Suspense } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

import HomeFrame from '@/components/home/HomeFrame';
import Text from '@/components/Text';
import Box from '@/components/Box';

const SyntaxHighlighter = lazy(async () => {
  const module = await import('react-syntax-highlighter/dist/esm/prism-light');

  module.default.registerLanguage('javascript', javascript);

  return { default: module.default };
}) as React.FC<SyntaxHighlighterProps>;

const titles = {
  default: { color: 'text-white', text: 'Fullstack', years: '6' },
  php: { color: 'font-bold text-php', text: 'PHP', years: '4' },
  vue: { color: 'font-bold text-vue', text: 'Vue', years: '5' },
  node: { color: 'font-bold text-node', text: 'Node', years: '4' },
  java: { color: 'font-bold text-java', text: 'Java', years: '4' },
  react: { color: 'font-bold text-react', text: 'React', years: '6' },
  sql: { color: 'font-bold text-sql', text: 'SQL', years: '6' },
};

const Home = () => {
  const [typed, setTyped] = useState('');
  const [tech, setTech] = useState('default');
  const isMobile = window.innerWidth < 768;

  const code = `function greet() {
  const today = new Date();
  const greeter = {
    name: "Sebastien Bacs",
    birth: new Date("1996-01-20"),
    yearsOfExperience: today.getFullYear() - 2019,
    skills: ["vue", "react", "php", "node", "java", "sql"]
  };
  const skillset = greeter.skills.join(', ');

  console.log(\`Hi there! I'm \${greeter.name}.\`);
  console.log(\`A fullstack developer working with \${skillset}\`);
  console.log(\`Welcome to my website, enjoy !\`);`;

  const finalBracket = `
}`;

  useEffect(() => {
    let index = 292;
    const speed = 25;

    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setTyped(code.slice(0, index) + finalBracket);
        index++;
        if (index > code.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      className="h-mobile-height lg:h-screen bg-home-gradient w-full flex items-center justify-center relative z-[50] overflow-hidden"
      id="home">
      <img
        src="/assets/opt_background.webp"
        loading="eager"
        fetchpriority="high"
        aria-hidden="true"
        className="hidden sm:block absolute object-cover w-screen h-screen pointer-events-none"
      />

      <img
        src="/assets/opt_background-mobile.webp"
        loading="eager"
        fetchpriority="high"
        aria-hidden="true"
        className="block sm:hidden absolute object-cover w-screen h-screen pointer-events-none"
      />

      <HomeFrame />

      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-evenly h-full gap-10 xl:gap-0 2xl:gap-50 text-center md:text-left">
        <div className="flex flex-col z-10 xl:h-[320px] lg:min-w-[530px]">
          <Text Type="h3">Sebastien Bacs</Text>
          <Text Type="h1">
            <span className={`${titles[tech].color}`}>{titles[tech].text}</span> Developer
          </Text>
          <Text Type="p" extraClass="italic" color={titles[tech].color}>
            {titles[tech].years}+ years of experience
          </Text>
          <Text Type="p" weight="light" extraClass="hidden xl:block mt-3 max-w-[400px]">
            My clients are supported throughout every stage of the product development lifecycle: from initial planning
            to delivery and long-term evolution and maintenance. Quality and transparency is what drives me!
          </Text>
          <div className="flex flex-wrap justify-center sm:justify-start px-10 sm:px-0 gap-4 mt-5">
            <button
              className="w-10 h-10 bg-php bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'php' ? 'default' : 'php')}
              tab-index="10">
              <img src="/assets/technology/php_white.svg" width="40" height="40" alt="php" />
            </button>
            <button
              className="w-10 h-10 bg-vue bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'vue' ? 'default' : 'vue')}>
              <img src="/assets/technology/vue_white.svg" width="40" height="40" alt="vue" />
            </button>
            <button
              className="w-10 h-10 bg-react bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'react' ? 'default' : 'react')}>
              <img src="/assets/technology/react_white.svg" width="40" height="40" alt="react" />
            </button>
            <button
              className="w-10 h-10 bg-java bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'java' ? 'default' : 'java')}>
              <img src="/assets/technology/java_white.svg" width="40" height="40" alt="java" />
            </button>
            <button
              className="w-10 h-10 bg-sql bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'sql' ? 'default' : 'sql')}>
              <img src="/assets/technology/sql_white.svg" width="40" height="40" alt="sql" />
            </button>
            <button
              className="w-10 h-10 bg-node bg-opacity-40 backdrop-blur rounded-lg transition-all duration-300 hover:bg-opacity-80"
              onClick={() => setTech(tech === 'node' ? 'default' : 'node')}>
              <img src="/assets/technology/node_white.svg" width="40" height="40" alt="node" />
            </button>
          </div>
          <img
            src="/assets/me/opt_4-mobile.webp"
            srcSet="
              /assets/me/opt_4-mobile.webp 200w,
              /assets/me/opt_4-retina.webp 400w
            "
            loading="eager"
            fetchpriority="high"
            aria-hidden="true"
            sizes="200px"
            width="200"
            height="300"
            className="block md:hidden w-[200px] mt-5 mx-auto"
          />
        </div>
        <div className="hidden lg:flex flex-col gap-4 text-left relative">
          <Box
            className="hidden md:block min-w-[530px] h-[320px] bg-gray-600 bg-opacity-10 backdrop-blur"
            padding="p-0">
            {!isMobile && (
              <Suspense fallback={null}>
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: '20px', margin: 0, fontSize: '0.7rem' }}>
                  {typed}
                </SyntaxHighlighter>
              </Suspense>
            )}
          </Box>
          <img
            src="/assets/me/opt_4-desktop.webp"
            loading="eager"
            fetchpriority="high"
            aria-hidden="true"
            className="absolute -bottom-8 right-0 w-64 translate-x-36 -translate-y-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
