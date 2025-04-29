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

  return (
    <div className="bg-gray-50 p-4 rounded shadow-md hover:shadow-lg transition-all">
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="text-3xl font-bold text-blue-600">{score.toFixed(2)}</div>
      <div className="w-full h-2 bg-gray-300 rounded my-2">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded" style={{ width: `${rounded}%` }}></div>
      </div>
      <p className="text-sm text-gray-600">{descriptions[name]?.[getLevel(score)] ?? ""}</p>
    </div>
  );
}
