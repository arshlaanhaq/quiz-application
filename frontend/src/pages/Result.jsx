import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="mt-4 text-lg">You scored <span className="text-blue-500 font-bold">{score}/{total}</span></p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
      >
        Play Again
      </button>
    </div>
  );
};


