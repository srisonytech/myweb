import { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [desc, setDesc] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const generateSong = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.post("/api/song/generate", { desc }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setLyrics(res.data.lyrics);
    setAudioUrl(res.data.audioUrl);
  };

  return (
    <div className="p-4">
      <textarea className="border w-full p-2 mb-2" placeholder="Write song description..." onChange={(e) => setDesc(e.target.value)} />
      <button onClick={generateSong} className="px-4 py-2 bg-purple-500 text-white rounded-lg">Generate Song</button>

      {lyrics && (
        <div className="mt-4">
          <h2 className="font-bold">Lyrics:</h2>
          <p className="whitespace-pre-line">{lyrics}</p>
        </div>
      )}

      {audioUrl && (
        <div className="mt-4">
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
}
