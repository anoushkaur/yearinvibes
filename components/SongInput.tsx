type SongInputProps = {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
};

export default function SongInput({ index, value, onChange }: SongInputProps) {
  return (
    <input
      value={value}
      onChange={e => onChange(index, e.target.value)}
      placeholder={`Song ${index + 1} - Title & Artist`}
      className="w-full p-3 rounded-xl shadow border"
    />
  );
}
