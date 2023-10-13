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
    <main className="min-h-screen flex flex-col items-center justify-center md:flex-row">
      <UserProfile
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <div>
        {selectedData.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.current}</p>
            <p>{item.previous}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
