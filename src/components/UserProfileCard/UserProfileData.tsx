import imgJeremyProfile from '../../assets/image-jeremy.png';

export function UserProfileData() {
  return (
    <div className="bg-indigo-800 p-6 flex items-center gap-4 rounded-xl">
      <img
        className="w-16 h-16 rounded-full border-2 border-white"
        src={imgJeremyProfile}
        alt="Jeremy Robson user photo profile"
      />
      <h1 className="text-blue-100 text-2xl font-poppins font-light">
        <span className="block font-poppins font-light text-xs text-blue-50">
          Report for
        </span>
        Jeremy Robson
      </h1>
    </div>
  );
}
