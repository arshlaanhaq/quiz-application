import axios from "axios";

export const fetchQuizData = async () => {
  try {
    // console.log("API request sent...");
    const response = await axios.get("https://quiz-application-ikzr.onrender.com/quiz-data");
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
