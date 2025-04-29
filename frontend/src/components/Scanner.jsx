import { useState } from "react";
import { analyzePersonality } from "../api/api";

export default function Scanner({ onResult }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      alert("Please enter some text to analyze.");
      return;
    }

    try {
      setLoading(true);
      const response = await analyzePersonality(text);
      console.log("API response:", response); // Log the API response to check its structure
      onResult(response.scores); // send scores up to parent
    } catch (error) {
      console.error(error);
      alert("Failed to analyze personality. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <section
     className="bg-white rounded-md shadow-md p-8 mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Personality Scanner</h2>
      </div>
      <textarea
        className="w-full min-h-[200px] p-4 border border-gray-300 rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a paragraph or description about a person to analyze their personality traits..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="mt-4 flex justify-center">
        <button
          className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 disabled:bg-gray-400"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Personality"}
        </button>
      </div>

      {loading && (
        <div className="text-center mt-6">
          <div className="spinner mx-auto mb-2 border-4 border-blue-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin"></div>
          <p>Analyzing personality traits...</p>
        </div>
      )}
    </section>
  );
}
