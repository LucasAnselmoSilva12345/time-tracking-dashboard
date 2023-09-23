export function UserProfileSubscription() {
  return (
    <div className="p-6">
      <ul className="flex items-center justify-between">
        <li className="text-blue-200 opacity-40 hover:opacity-100">
          <a href="#">Daily</a>
        </li>
        <li className="text-blue-200 opacity-40 hover:opacity-100">
          <a href="/">Weekly</a>
        </li>
        <li className="text-blue-200 opacity-40 hover:opacity-100">
          <a href="#">Monthly</a>
        </li>
      </ul>
    </div>
  );
}
