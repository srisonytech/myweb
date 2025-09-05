import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">🎶 SonySongs</h1>
      <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Login</Link>
      <Link to="/register" className="px-4 py-2 mt-2 bg-green-500 text-white rounded-lg">Register</Link>
    </div>
  );
}
