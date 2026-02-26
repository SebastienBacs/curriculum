export default function ProjectTech({ path, name }: Prop) {
  return (
    <div className="bg-white bg-opacity-10 p-1 xs:p-2 rounded-md h-7 w-7 xs:w-10 xs:h-10 flex items-center justify-center">
      <img src={path} width="24" height="24" alt={name} />
    </div>
  );
}

type Prop = {
  path: string;
  name: string;
};
