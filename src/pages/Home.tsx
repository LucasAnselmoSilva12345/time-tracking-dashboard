import { UserProfileSubscription } from '../components/UserProfileSubscription';

export function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center md:flex-row">
      <UserProfileSubscription />
      <h1 className="text-3xl font-poppins font-bold">Hello world!</h1>
    </main>
  );
}
