import { useState } from 'react';
import Head from 'next/head';
import html2canvas from 'html2canvas';
import SongInput from '../components/SongInput';
import RecapCard from '../components/RecapCard';

export default function Home() {
  const [songs, setSongs] = useState(Array(5).fill(''));
  const [mood, setMood] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSongChange = (index: number, value: string) => {
    const newSongs = [...songs];
    newSongs[index] = value;
    setSongs(newSongs);
  };

  const generateVibe = () => {
    const keywords = songs.join(' ').toLowerCase();
    let result = 'Chill';
    if (keywords.includes('love')) result = 'Romantic';
    else if (keywords.includes('cry')) result = 'Melancholy';
    else if (keywords.includes('party') || keywords.includes('dance')) result = 'Hype';

    setMood(result);
    setShowResult(true);
  };

  const downloadCard = () => {
    const card = document.getElementById('recap-card');
    if (!card) return;
    html2canvas(card).then(canvas => {
      const link = document.createElement('a');
      link.download = 'yearinvibes.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <Head>
        <title>YearInVibes</title>
        <meta name="description" content="Your personalized 2025 music + mood recap!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-6">
        <h1 className="text-5xl font-bold text-purple-700">🎧 YearInVibes</h1>
        <p className="text-gray-700 mt-2">Your personalized 2025 music + mood recap</p>
      </header>

      {!showResult ? (
        <div className="space-y-4 w-full max-w-md">
          {songs.map((song, i) => (
            <SongInput key={i} index={i} value={song} onChange={handleSongChange} />
          ))}
          <button
            onClick={generateVibe}
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Generate My Vibe Recap
          </button>
        </div>
      ) : (
        <RecapCard songs={songs} mood={mood} onDownload={downloadCard} />
      )}

      <footer className="mt-10 text-sm text-gray-600">
        Made with 💜 by Anoushka • <a href="https://github.com/anoushkaur/yearinvibes" className="underline">GitHub</a>
      </footer>
    </div>
  );
}
