const MoodSlider = () => {
  const [mood, setMood] = useState(50);
  
  return (
    <input 
      type="range" 
      min="0" 
      max="100" 
      value={mood} 
      onChange={(e) => setMood(e.target.value)}
      className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer"
    />
  );
};
