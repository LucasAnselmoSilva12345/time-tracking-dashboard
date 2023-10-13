import { UserProfileData } from './UserProfileData';

type UserProfileType = 'daily' | 'weekly' | 'monthly';

type UserProfileProps = {
  selectedOption: UserProfileType;
  handleOptionChange: (option: UserProfileType) => void;
};

export function UserProfile({
  selectedOption,
  handleOptionChange,
}: UserProfileProps) {
  return (
    <aside className="bg-indigo-900 w-full rounded-xl">
      <UserProfileData />

      <div className="p-6">
        <ul className="flex items-center justify-between text-indigo-500">
          <button
            onClick={() => handleOptionChange('daily')}
            className={selectedOption === 'daily' ? 'text-indigo-100' : ''}
          >
            Daily
          </button>

          <button
            onClick={() => handleOptionChange('weekly')}
            className={selectedOption === 'weekly' ? 'text-indigo-100' : ''}
          >
            Weekly
          </button>

          <button
            onClick={() => handleOptionChange('monthly')}
            className={selectedOption === 'monthly' ? 'text-indigo-100' : ''}
          >
            Monthly
          </button>
        </ul>
      </div>
    </aside>
  );
}
