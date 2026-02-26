const WorkExperience = ({ id, pattern, children }: Prop) => {
  return (
    <section className={`sm:px-10 py-12 ${pattern ? 'bg-pattern-soft border-y border-[#111111]' : ''}`} id={id}>
      <section className={`max-w-7xl mx-auto relative p-5`}>{children}</section>
    </section>
  );
};

export default WorkExperience;

type Prop = {
  id: string;
  pattern?: boolean;
  children: JSX.Element[] | JSX.Element;
};
