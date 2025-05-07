// import { useState } from "react";
// import { analyzePersonality } from "../api/api";

// export default function Scanner({ onResult }) {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = async () => {
//     if (!text.trim()) {
//       alert("Please enter some text to analyze.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await analyzePersonality(text);
//       console.log("API response:", response); // Log the API response to check its structure
//       onResult(response.scores); // send scores up to parent
//     } catch (error) {
//       console.error(error);
//       alert("Failed to analyze personality. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleAnalyze();
//     }
//   };

//   return (
//     <section
//      className="bg-white rounded-md shadow-md p-8 mb-8">
//       <div className="mb-4">
//       <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
//       <span role="img" aria-label="brain">🧠</span> Personality Scanner</h2>
//       </div>
//       <textarea
//         className="w-full min-h-[200px] p-4 border border-gray-300 rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="Enter a paragraph or description about a person to analyze their personality traits..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <div className="mt-4 flex justify-center">
//         <button
//           className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 disabled:bg-gray-400"
//           onClick={handleAnalyze}
//           disabled={loading}
//         >
//           {loading ? "Analyzing..." : "Analyze Personality"}
//         </button>
//       </div>

//       {loading && (
//         <div className="text-center mt-6">
//           <div className="spinner mx-auto mb-2 border-4 border-blue-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin"></div>
//           <p>Analyzing personality traits...</p>
//         </div>
//       )}
//     </section>
//   );
// }




// import { useState } from "react";
// import { analyzePersonality } from "../api/api";

// export default function Scanner({ onResult }) {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = async () => {
//     if (!text.trim()) {
//       alert("Please enter some text to analyze.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await analyzePersonality(text);
//       console.log("API response:", response);
//       onResult(response.scores);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to analyze personality. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleAnalyze();
//     }
//   };

//   return (
//     <section className="bg-white rounded-2xl shadow-xl p-10 mb-12 transition duration-300 ease-in-out">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-extrabold text-indigo-700 flex items-center justify-center gap-2">
//           <span role="img" aria-label="brain">🧠</span>
//           Personality Scanner
//         </h2>
//         <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
//           Enter a paragraph or description and let AI analyze the personality traits hidden within.
//         </p>
//       </div>

//       <textarea
//         className="w-full min-h-[180px] p-5 text-lg border border-gray-300 rounded-xl resize-vertical focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//         placeholder="Write something about a person here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />

//       <div className="mt-6 flex justify-center">
//         <button
//           className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-md disabled:from-gray-400 disabled:to-gray-400"
//           onClick={handleAnalyze}
//           disabled={loading}
//         >
//           {loading ? "Analyzing..." : "Analyze Personality"}
//         </button>
//       </div>

//       {loading && (
//         <div className="text-center mt-6">
//           <div className="mx-auto mb-2 w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
//           <p className="text-sm text-gray-500">Analyzing personality traits...</p>
//         </div>
//       )}
//     </section>
//   );
// }


// import { useState } from "react";
// import { analyzePersonality } from "../api/api";
// export default function Scanner({ onResult, setLoading }) {
//   const [text, setText] = useState("");

//   const handleAnalyze = async () => {
//     if (!text.trim()) {
//       alert("Please enter some text to analyze.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await analyzePersonality(text);
//       onResult(response.scores);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to analyze personality. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleAnalyze();
//     }
//   };

//   return (
//     <section className="bg-white rounded-md shadow-md p-8 mb-8" id="scanner">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">🧠 Personality Scanner</h2>
//       <textarea
//         className="w-full min-h-[200px] p-4 border border-gray-300 rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="Enter a paragraph or description about a person to analyze their personality traits..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <div className="mt-4 flex justify-center">
//         <button
//           className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 disabled:bg-gray-400"
//           onClick={handleAnalyze}
//           disabled={text.trim() === ""}
//         >
//           Analyze Personality
//         </button>
//       </div>
//     </section>
//   );
// }

// with Toasting animation
// import { useState } from "react";
// import { analyzePersonality } from "../api/api";
// import { toast } from "react-toastify";  // Import toast from react-toastify
// import "react-toastify/dist/ReactToastify.css";  // Import Toastify CSS

// export default function Scanner({ onResult, setLoading }) {
//   const [text, setText] = useState("");

//   // Set up the toast container
//   const notifyError = (message) => toast.error(message);
//   const notifySuccess = (message) => toast.success(message);

//   const handleAnalyze = async () => {
//     if (!text.trim()) {
//       notifyError("Please enter some text to analyze."); // Show error toast
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await analyzePersonality(text);
//       onResult(response.scores);
//       notifySuccess("Personality analysis successful!"); // Show success toast
//     } catch (error) {
//       console.error(error);
//       notifyError("Failed to analyze personality. Please try again."); // Show error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleAnalyze();
//     }
//   };

//   return (
//     <section className="bg-white rounded-md shadow-md p-8 mb-8" id="scanner">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">🧠 Personality Scanner</h2>
//       <textarea
//         className="w-full min-h-[200px] p-4 border border-gray-300 rounded-md resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="Enter a paragraph or description about a person to analyze their personality traits..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <div className="mt-4 flex justify-center">
//         <button
//           className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 disabled:bg-gray-400"
//           onClick={handleAnalyze}
//           disabled={text.trim() === ""}
//         >
//           Analyze Personality
//         </button>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { analyzePersonality } from "../api/api";
import { toast } from "react-toastify";
import CustomToast from "./CustomToast";  // Import the custom toast component

export default function Scanner({ onResult, setLoading }) {
  const [text, setText] = useState("");

  // Create custom toast notifications
  const notifyError = (message) =>
    toast.error(<CustomToast message={message} type="error" />);
  const notifySuccess = (message) =>
    toast.success(<CustomToast message={message} type="success" />);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      notifyError("Please enter some text to analyze."); // Show error toast
      return;
    }

    try {
      setLoading(true);
      const response = await analyzePersonality(text);
      onResult(response.scores);
      notifySuccess("Personality analysis successful!"); // Show success toast
    } catch (error) {
      console.error(error);
      notifyError("Failed to analyze personality. Please try again."); // Show error toast
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
    <section className="bg-white rounded-md shadow-md p-8 mb-8" id="scanner">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">🧠 Personality Scanner</h2>
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
          disabled={text.trim() === ""}
        >
          Analyze Personality
        </button>
      </div>
    </section>
  );
}
