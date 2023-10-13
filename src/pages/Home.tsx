import { useState } from 'react';
import { UserProfile } from '../components/UserProfileCard/UserProfile';
import dataJSON from '../lib/data.json';

type DataItem = {
  title: string;
  timeframes: Record<string, { current: number; previous: number }>;
};

type TimeframeOption = 'daily' | 'weekly' | 'monthly';

export function Home() {
  const [selectedOption, setSelectedOption] =
    useState<TimeframeOption>('daily');

  const handleOptionChange = (option: TimeframeOption) => {
    setSelectedOption(option);
  };

  const selectedData = dataJSON.map((item: DataItem) => ({
    title: item.title,
    current: item.timeframes[selectedOption].current,
    previous: item.timeframes[selectedOption].previous,
  }));

  return (
    <main className="min-h-screen container mx-auto my-0 p-8 flex flex-col items-center justify-center gap-1 lg:gap-3 lg:flex-row">
      <UserProfile
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <section className="w-full grid grid-cols-1 gap-1 text-indigo-100 lg:grid-cols-3">
        {selectedData.map((item, index) => (
          <div
            key={index}
            className=" p-6 space-y-3 rounded-xl bg-indigo-900 duration-150 cursor-pointer hover:opacity-50"
          >
            <h2 className="font-inter text-xl lg:text-base font-semibold">
              {item.title}
            </h2>
            <div className="flex items-center justify-between lg:flex-col lg:items-start lg:space-y-3">
              <h3 className="text-3xl lg:text-7xl">{item.current}hrs</h3>
              <span className="text-sm">Last week - {item.previous}hrs</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
