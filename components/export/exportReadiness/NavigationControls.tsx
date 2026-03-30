export const NavigationControls = ({
  next,
  prev,
  isAnswered,
}: any) => {
  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={prev}
        className="px-5 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 transition"
      >
        Back
      </button>
      <button
        onClick={next}
        disabled={!isAnswered}
        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
          isAnswered
            ? "bg-green-600 text-white hover:bg-green-700 shadow"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        Continue →
      </button>
    </div>
  );
};

