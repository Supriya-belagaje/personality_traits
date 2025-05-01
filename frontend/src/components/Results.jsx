import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import TraitCard from "./TraitCard";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Results({ scores }) {
  const [activeTab, setActiveTab] = useState("ocean");

  if (!scores) return null;

  const oceanTraits = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
  const discTraits = ["dominance", "influence", "steadiness", "compliance"];

  const getTraitList = (traits) => {
    return traits.map((trait) => ({
      name: trait.charAt(0).toUpperCase() + trait.slice(1),
      score: scores[trait] ?? 0,
    }));
  };

  const traitList = activeTab === "ocean" ? getTraitList(oceanTraits) : getTraitList(discTraits);

  const chartData = {
    labels: traitList.map((trait) => trait.name),
    datasets: [
      {
        label: "Score (%)",
        data: traitList.map((trait) => trait.score),
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        beginAtZero: true,
      },
    },
  };

  return (
<section className="bg-white rounded-md shadow-md p-8 mb-8 w-full">
<div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Analysis Results</h2>
      </div>

      {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${
              activeTab === "ocean"
                ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("ocean")}
          >
            OCEAN Model
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${
              activeTab === "disc"
                ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("disc")}
          >
            DISC Model
          </button>
        </div>


      {/* Side-by-side Layout */}
      <div className="flex flex-col gap-6">
        {/* Trait Cards - Left */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {traitList.map((trait) => (
            <TraitCard key={trait.name} name={trait.name} score={trait.score} />
          ))}
        </div>

        {/* Chart - Below */}
        <div className="flex-1">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </section>
  );
}
