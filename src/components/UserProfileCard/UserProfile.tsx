import { UserProfileData } from './UserProfileData';
import { UserProfileSubscription } from './UserProfileSubscription';

export function UserProfile() {
  return (
    <aside className="bg-indigo-900 rounded-xl">
      <UserProfileData />

      <UserProfileSubscription />
    </aside>
  );
}
