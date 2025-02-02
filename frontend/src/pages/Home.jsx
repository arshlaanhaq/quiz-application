import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz!</h1>
      <Link to="/quiz">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};


