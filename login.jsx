import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input className="border p-2 mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Login</button>
    </div>
  );
}
