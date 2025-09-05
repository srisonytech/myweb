import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("/api/auth/register", { email, password });
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input className="border p-2 mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="px-4 py-2 bg-green-500 text-white rounded-lg">Register</button>
    </div>
  );
}
