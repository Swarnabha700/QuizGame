import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Question from "./Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(45);
  const [showQuestions, setShowQuestions] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quiz");
        if (!response.data || !Array.isArray(response.data.questions)) {
          throw new Error("Invalid API response format or questions is not an array");
        }
        const formattedQuestions = response.data.questions.map((q) => {
          const options = q.options.map((opt) => opt.description);
          const correctOption = q.options.find((opt) => opt.is_correct);
          return {
            question: q.description || q.question,
            options: options,
            correctAnswer: correctOption ? correctOption.description : "",
          };
        });
        setQuestions(formattedQuestions);
      } catch (err) {
        setError("Failed to load quiz. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuizData();
  }, []);

  useEffect(() => {
    if (showQuestions && !quizCompleted && questions.length > 0) {
      timerId.current = setTimeout(() => {
        handleNextQuestion();
      }, 45000);
    }
    return () => clearTimeout(timerId.current);
  }, [currentQuestion, quizCompleted, questions, showQuestions]);

  useEffect(() => {
    let intervalId;
    if (showQuestions && !quizCompleted && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setTimer(45);
    }
    return () => clearInterval(intervalId);
  }, [currentQuestion, quizCompleted, timer, showQuestions]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion]?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => handleNextQuestion(), 2000); // Auto-switch after 2 seconds
  };

  const handleNextQuestion = () => {
    clearTimeout(timerId.current);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimer(45);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    setShowQuestions(true);
  };

  if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="shadow-lg rounded-lg w-full max-w-xl">
        {!showQuestions && (
          <button
            onClick={handleStartQuiz}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Quiz
          </button>
        )}
        {showQuestions && (
          quizCompleted ? (
            <div className="text-center p-6">
              <h2 className="text-3xl font-bold text-gray-800">Quiz Completed! 🎉</h2>
              <div className="mt-6 flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-xl font-semibold">Your Score</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{score} / {questions.length}</p>
                <p className="mt-3 text-lg font-medium text-gray-700">
                  {score === questions.length
                    ? "🥇 Perfect! You're a genius!"
                    : score > questions.length / 2
                    ? "🔥 Great job! Keep practicing!"
                    : "💪 Keep going! Practice makes perfect!"}
                </p>
                <div className="relative w-full mt-4 h-4 bg-gray-300 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all duration-700 ease-in-out"
                    style={{ width: `${(score / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                onClick={() => window.location.reload()}
              >
                🔄 Restart Quiz
              </button>
            </div>
          ) : (
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 flex items-center">Question {currentQuestion + 1} of {questions.length} ({timer}s)</h2>
              <Question
                question={questions[currentQuestion]?.question}
                options={questions[currentQuestion]?.options}
                selectedAnswer={selectedAnswer}
                correctAnswer={questions[currentQuestion]?.correctAnswer}
                handleAnswerClick={handleAnswerClick}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Quiz;
