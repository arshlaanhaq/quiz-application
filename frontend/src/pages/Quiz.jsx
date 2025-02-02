import { useEffect, useState } from "react";
import { fetchQuizData } from "../api/quizApi";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      // console.log("Fetching quiz data...");
      try {
        const data = await fetchQuizData();
        // console.log("Data received:", data);

        // Map API response to desired format
        const formattedQuestions = data.map((question) => ({
          question: question.description, 
          options: question.options || [],
          correctAnswer: question.options.find(item=> item.is_correct=== true ) 
        }));

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    getData();
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
      setScore((prevScore) => prevScore + 1); 
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result", { state: { score: score + (selectedAnswer === questions[currentQuestion]?.correctAnswer ? 1 : 0), total: questions.length } });
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {questions.length > 0 ? (
        <>
          <Timer timeLimit={30} onTimeUp={() => handleAnswerClick("")} />
          <QuestionCard
            question={questions[currentQuestion]?.question}
            options={questions[currentQuestion]?.options}
            handleAnswerClick={handleAnswerClick}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
