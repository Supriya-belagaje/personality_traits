// export default function TraitCard({ name, score }) {
//   const rounded = Math.round(score);

//   const getLevel = (s) => (s < 33 ? "low" : s < 66 ? "medium" : "high");

//   const descriptions = {
//     Openness: {
//       low: "Prefers routine and familiar experiences",
//       medium: "Balances between conventional and creative",
//       high: "Very creative and open to new ideas",
//     },
//     Conscientiousness: {
//       low: "Spontaneous and less organized",
//       medium: "Reliable but flexible",
//       high: "Highly organized and disciplined",
//     },
//     Extraversion: {
//       low: "Reserved and solitary",
//       medium: "Balanced social and private time",
//       high: "Outgoing and energetic",
//     },
//     Agreeableness: {
//       low: "More competitive and less compassionate",
//       medium: "Generally warm and friendly",
//       high: "Very compassionate and cooperative",
//     },
//     Neuroticism: {
//       low: "Emotionally stable and resilient",
//       medium: "Handles stress reasonably",
//       high: "Sensitive and prone to worry",
//     },
//     Dominance: {
//       low: "Cooperative and less assertive",
//       medium: "Assertive when needed",
//       high: "Strong, direct, results-oriented",
//     },
//     Influence: {
//       low: "Reserved socially",
//       medium: "Sociable but balanced",
//       high: "Enthusiastic and persuasive",
//     },
//     Steadiness: {
//       low: "Prefers variety and change",
//       medium: "Stable but adaptable",
//       high: "Patient, reliable, consistent",
//     },
//     Compliance: {
//       low: "Independent and questions rules",
//       medium: "Follows rules selectively",
//       high: "Rule-following and structured",
//     },
//   };

//   return (
//     <div className="bg-gray-50 p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <h3 className="font-bold text-lg">{name}</h3>
//       <div className="text-3xl font-bold text-blue-600">{score.toFixed(2)}</div>
//       <div className="w-full h-2 bg-gray-300 rounded my-2">
//         <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded" style={{ width: `${rounded}%` }}></div>
//       </div>
//       <p className="text-sm text-gray-600">{descriptions[name]?.[getLevel(score)] ?? ""}</p>
//     </div>
//   );
// }


export default function TraitCard({ name, score }) {
  const rounded = Math.round(score);

  const getLevel = (s) => (s < 33 ? "low" : s < 66 ? "medium" : "high");

  const descriptions = {
    Openness: {
      low: "Prefers routine and familiar experiences",
      medium: "Balances between conventional and creative",
      high: "Very creative and open to new ideas",
    },
    Conscientiousness: {
      low: "Spontaneous and less organized",
      medium: "Reliable but flexible",
      high: "Highly organized and disciplined",
    },
    Extraversion: {
      low: "Reserved and solitary",
      medium: "Balanced social and private time",
      high: "Outgoing and energetic",
    },
    Agreeableness: {
      low: "More competitive and less compassionate",
      medium: "Generally warm and friendly",
      high: "Very compassionate and cooperative",
    },
    Neuroticism: {
      low: "Emotionally stable and resilient",
      medium: "Handles stress reasonably",
      high: "Sensitive and prone to worry",
    },
    Dominance: {
      low: "Cooperative and less assertive",
      medium: "Assertive when needed",
      high: "Strong, direct, results-oriented",
    },
    Influence: {
      low: "Reserved socially",
      medium: "Sociable but balanced",
      high: "Enthusiastic and persuasive",
    },
    Steadiness: {
      low: "Prefers variety and change",
      medium: "Stable but adaptable",
      high: "Patient, reliable, consistent",
    },
    Compliance: {
      low: "Independent and questions rules",
      medium: "Follows rules selectively",
      high: "Rule-following and structured",
    },
  };

  const level = getLevel(score);

  const levelColors = {
    low: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <span
          className={`px-2 py-0.5 text-xs rounded-full font-medium ${levelColors[level]}`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
      </div>

      <div className="text-4xl font-extrabold text-indigo-600 mb-1">
        {score.toFixed(2)}%
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${rounded}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600">{descriptions[name]?.[level]}</p>
    </div>
  );
}
