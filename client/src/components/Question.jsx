const Question = ({ question, options, selectedAnswer, correctAnswer, handleAnswerClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`px-3 py-2 w-full rounded-md transition-all duration-300 
              ${selectedAnswer === option
                ? option === correctAnswer
                  ? "bg-green-500 text-white" // Correct answer
                  : "bg-red-500 text-white" // Wrong answer
                : "bg-gray-200 hover:bg-gray-400"
              }`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null} // Disable other options once an option is selected
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && selectedAnswer !== correctAnswer && (
        <p className="mt-4 text-red-600 font-bold">Correct Answer: {correctAnswer}</p>
      )}
    </div>
  );
};

export default Question;