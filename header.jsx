import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="font-bold">SonySongs 🎶</h1>
      <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">Logout</button>
    </div>
  );
}
