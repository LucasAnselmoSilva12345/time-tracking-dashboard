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
    <aside className="bg-indigo-900 rounded-xl">
      <UserProfileData />

      <div className="p-6">
        <ul className="flex items-center justify-between">
          <button
            onClick={() => handleOptionChange('daily')}
            className={selectedOption === 'daily' ? 'active' : ''}
          >
            Daily
          </button>

          <button
            onClick={() => handleOptionChange('weekly')}
            className={selectedOption === 'weekly' ? 'active' : ''}
          >
            Weekly
          </button>

          <button
            onClick={() => handleOptionChange('monthly')}
            className={selectedOption === 'monthly' ? 'active' : ''}
          >
            Monthly
          </button>
        </ul>
      </div>
    </aside>
  );
}
