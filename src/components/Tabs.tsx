import { Dispatch, SetStateAction } from 'react';

export default function Tabs({ tabs, currentTab, setCurrentTab }: Prop) {
  const computeWidth = () => {
    return parseFloat((100 / tabs.length).toFixed(2));
  };

  const computeLeftPos = () => {
    return computeWidth() * tabs.findIndex((tab) => tab === currentTab);
  };

  return (
    <div>
      <div className="relative overflow-hidden text-white">
        <div className="flex justify-center items-center border-b border-neutral-800 mb-2">
          {tabs.map((tab, index) => (
            <button
              onClick={() => setCurrentTab(tab)}
              className={`flex-grow text-center relative py-2 mb-1 rounded-lg hover:bg-black-300 transition-all duration-300 ${currentTab === tab ? 'font-bold' : ''}`}
              style={{ width: computeWidth() + '%' }}
              key={index}>
              {tab}
            </button>
          ))}
        </div>
        <div
          className="h-px w-full absolute bottom-2 bg-white transition-all duration-300 z-10"
          style={{ width: computeWidth() + '%', left: computeLeftPos() + '%' }}></div>
      </div>
    </div>
  );
}

type Prop = {
  tabs: string[];
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
};
