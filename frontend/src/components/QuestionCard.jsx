export default function QuestionCard({ question, options, handleAnswerClick }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl">
      <h2 className="text-lg font-semibold">{question || "No question available"}</h2>
      <ul className="mt-4 space-y-2">
        {options.length > 0 ? (
          options.map((option, index) => (
            <li
              key={index}
              className="p-2 border rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white transition-colors"
              onClick={() => handleAnswerClick(option)}
            >
              {typeof option === "object" ? option.description : option}
            </li>
          ))
        ) : (
          <p>No options available</p>
        )}
      </ul>
    </div>
  );
};
