export default function Message({ sender, text }) {
  return (
    <div className={`p-2 my-1 rounded ${sender === "me" ? "bg-blue-200 text-right" : "bg-gray-200 text-left"}`}>
      <p>{text}</p>
    </div>
  );
}
