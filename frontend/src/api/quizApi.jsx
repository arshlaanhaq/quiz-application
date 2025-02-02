import axios from "axios";

export const fetchQuizData = async () => {
  try {
    // console.log("API request sent...");
    const response = await axios.get("http://localhost:5000/quiz-data");
    // console.log("API response:", response.data);

    // ✅ Ensure correct structure
    if (response.data && Array.isArray(response.data.questions)) {
      return response.data.questions; 
    } else {
      console.error("Invalid API response structure", response.data);
      return [];
    }
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
