type RecapCardProps = {
  songs: string[];
  mood: string;
  onDownload: () => void;
};

export default function RecapCard({ songs, mood, onDownload }: RecapCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center" id="recap-card">
      <h2 className="text-2xl font-bold mb-4">Your 2025 Vibe ✨</h2>
      <p className="mb-2">Mood: <span className="font-semibold">{mood}</span></p>
      <p className="mb-4 text-gray-600">Based on your top songs:</p>
      <ul className="text-left list-disc pl-5 mb-4">
        {songs.map((song, i) => (
          <li key={i}>{song}</li>
        ))}
      </ul>
      <button
        onClick={onDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Download Recap Card
      </button>
    </div>
  );
}
