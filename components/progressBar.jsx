const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full h-4 bg-gray-300 rounded overflow-hidden">
        <div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };

  export default ProgressBar;