// import { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import TraitCard from "./TraitCard";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function Results({ scores }) {
//   const [activeTab, setActiveTab] = useState("ocean");

//   if (!scores) return null;

//   const oceanTraits = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
//   const discTraits = ["dominance", "influence", "steadiness", "compliance"];

//   const getTraitList = (traits) => {
//     return traits.map((trait) => ({
//       name: trait.charAt(0).toUpperCase() + trait.slice(1),
//       score: scores[trait] ?? 0,
//     }));
//   };

//   const traitList = activeTab === "ocean" ? getTraitList(oceanTraits) : getTraitList(discTraits);

//   const chartData = {
//     labels: traitList.map((trait) => trait.name),
//     datasets: [
//       {
//         label: "Score (%)",
//         data: traitList.map((trait) => trait.score),
//         backgroundColor: "rgba(59, 130, 246, 0.6)",
//         borderRadius: 5,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         max: 100,
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
// <section className="bg-white rounded-md shadow-md p-8 mb-8 w-full">
// <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Analysis Results</h2>
//       </div>

//       {/* Tabs */}
//         <div className="flex gap-4 mb-6">
//           <button
//             className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${
//               activeTab === "ocean"
//                 ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
//                 : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
//             }`}
//             onClick={() => setActiveTab("ocean")}
//           >
//             OCEAN Model
//           </button>
//           <button
//             className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${
//               activeTab === "disc"
//                 ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
//                 : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
//             }`}
//             onClick={() => setActiveTab("disc")}
//           >
//             DISC Model
//           </button>
//         </div>


//       {/* Side-by-side Layout */}
//       <div className="flex flex-col gap-6">
//         {/* Trait Cards - Left */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
//           {traitList.map((trait) => (
//             <TraitCard key={trait.name} name={trait.name} score={trait.score} />
//           ))}
//         </div>

//         {/* Chart - Below */}
//         <div className="flex-1">
//           <Bar data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import TraitCard from "./TraitCard";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function Results({ scores }) {
//   const [activeTab, setActiveTab] = useState("ocean");

//   if (!scores) return null;

//   const oceanTraits = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
//   const discTraits = ["dominance", "influence", "steadiness", "compliance"];

//   const getTraitList = (traits) => {
//     return traits.map((trait) => ({
//       name: trait.charAt(0).toUpperCase() + trait.slice(1),
//       score: scores[trait] ?? 0,
//     }));
//   };

//   const traitList = activeTab === "ocean" ? getTraitList(oceanTraits) : getTraitList(discTraits);

//   const chartData = {
//     labels: traitList.map((trait) => trait.name),
//     datasets: [
//       {
//         label: "Score (%)",
//         data: traitList.map((trait) => trait.score),
//         backgroundColor: "rgba(99, 102, 241, 0.7)",
//         borderRadius: 8,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         max: 100,
//         beginAtZero: true,
//         ticks: {
//           color: "#6B7280",
//           stepSize: 20,
//         },
//       },
//       x: {
//         ticks: {
//           color: "#6B7280",
//         },
//       },
//     },
//   };

//   return (
//     <section className="bg-white rounded-2xl shadow-lg p-10 mb-12 w-full transition-all duration-300 max-w-6xl mx-auto">
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h2 className="text-4xl font-bold text-indigo-700 mb-2">🔍 Personality Analysis</h2>
//         <p className="text-gray-600">Explore your results across different personality models</p>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
//             activeTab === "ocean"
//               ? "bg-indigo-100 text-indigo-600 shadow-md"
//               : "text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
//           }`}
//           onClick={() => setActiveTab("ocean")}
//         >
//           OCEAN Model
//         </button>
//         <button
//           className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
//             activeTab === "disc"
//               ? "bg-indigo-100 text-indigo-600 shadow-md"
//               : "text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
//           }`}
//           onClick={() => setActiveTab("disc")}
//         >
//           DISC Model
//         </button>
//       </div>

//       {/* Traits + Chart */}
//       <div className="grid lg:grid-cols-2 gap-10 items-start">
//         {/* Trait Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {traitList.map((trait) => (
//             <TraitCard key={trait.name} name={trait.name} score={trait.score} />
//           ))}
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-gray-50 rounded-xl p-6 shadow-md">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Trait Distribution Chart</h3>
//           <Bar data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </section>
//   );
// }


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
export default function Results({ scores, loading }) {
  const [activeTab, setActiveTab] = useState("ocean");

  const oceanTraits = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
  const discTraits = ["dominance", "influence", "steadiness", "compliance"];

  if (!scores && !loading) return null;

  const getTraitList = (traits) =>
    traits.map((trait) => ({
      name: trait.charAt(0).toUpperCase() + trait.slice(1),
      score: scores?.[trait] ?? 0,
    }));

  const traitList = activeTab === "ocean" ? getTraitList(oceanTraits) : getTraitList(discTraits);

    return (
      <section className="relative bg-white rounded-2xl shadow-lg p-10 mb-12 w-full max-w-6xl mx-auto min-h-[300px]">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-2">🔍 Personality Analysis</h2>
          <p className="text-gray-600">Explore your results across different personality models</p>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 z-10 flex flex-col justify-center items-center rounded-2xl">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-sm text-gray-500">Analyzing personality traits...</p>
          </div>
        )}

        {/* Only show content if not loading */}
        {!loading && (
          <>
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-10">
              <button
                className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === "ocean"
                  ? "bg-indigo-100 text-indigo-600 shadow-md"
                  : "text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
                  }`}
                onClick={() => setActiveTab("ocean")}
              >
                OCEAN Model
              </button>
              <button
                className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === "disc"
                  ? "bg-indigo-100 text-indigo-600 shadow-md"
                  : "text-gray-500 hover:text-indigo-500 hover:bg-gray-100"
                  }`}
                onClick={() => setActiveTab("disc")}
              >
                DISC Model
              </button>
            </div>

            {/* Traits + Chart */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Trait Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {traitList.map((trait) => (
                  <TraitCard key={trait.name} name={trait.name} score={trait.score} />
                ))}
              </div>

              {/* Chart */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Trait Distribution Chart</h3>
                {/* <Bar
                  data={{
                    labels: traitList.map((t) => t.name),
                    datasets: [
                      {
                        label: "Score (%)",
                        data: traitList.map((t) => t.score),
                        backgroundColor: "rgba(99, 102, 241, 0.7)",
                        borderRadius: 8,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: { y: { max: 100, beginAtZero: true } },
                  }}
                /> */}
                <Bar
                  data={{
                    labels: traitList.map((t) => t.name),
                    datasets: [
                      {
                        label: "Score (%)",
                        data: traitList.map((t) => t.score),
                        backgroundColor: function (context) {
                          const chart = context.chart;
                          const { ctx, chartArea } = chart;
                          if (!chartArea) return null;

                          // Create gradient for each bar
                          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                          gradient.addColorStop(0, "rgba(99, 102, 241, 0.9)");   // Indigo
                          gradient.addColorStop(1, "rgba(139, 92, 246, 0.8)");  // Purple
                          return gradient;
                        },
                        borderRadius: 10,
                        barPercentage: 0.6,
                        categoryPercentage: 0.6,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          label: (context) => `Score: ${context.parsed.y.toFixed(2)}%`,
                        },
                      },
                    },
                    scales: {
                      x: {
                        ticks: {
                          color: "#4B5563",
                          font: { weight: "600" },
                        },
                        grid: { display: false },
                      },
                      y: {
                        max: 100,
                        beginAtZero: true,
                        ticks: {
                          color: "#6B7280",
                          font: { weight: "500" },
                          callback: (value) => `${value}%`,
                        },
                        grid: {
                          color: "rgba(203,213,225,0.3)",
                          borderDash: [4, 4],
                        },
                      },
                    },
                  }}
                />


              </div>
            </div>
          </>
        )}
      </section>
    );

  // return (
  //   <section className="bg-white rounded-md shadow-md p-8 mb-8 w-full">
  //     {/* Header */}
  //     <div className="flex justify-between items-center mb-6">
  //       <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
  //     </div>

  //     {/* Tabs */}
  //     <div className="flex gap-4 mb-6">
  //       <button
  //         className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${activeTab === "ocean"
  //             ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
  //             : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
  //           }`}
  //         onClick={() => setActiveTab("ocean")}
  //       >
  //         OCEAN Model
  //       </button>
  //       <button
  //         className={`px-6 py-2 font-semibold rounded-t-md transition-all duration-300 ${activeTab === "disc"
  //             ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
  //             : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
  //           }`}
  //         onClick={() => setActiveTab("disc")}
  //       >
  //         DISC Model
  //       </button>
  //     </div>

  //     {/* Scores First, Then Chart */}
  //     <div className="flex flex-col gap-8">
  //       {/* Trait Cards - Top */}
  //       <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
  //         {traitList.map((trait) => (
  //           <TraitCard key={trait.name} name={trait.name} score={trait.score} />
  //         ))}
  //       </div>

  //       {/* Chart - Bottom */}
  //       <div className="w-full">
  //         <Bar
  //           data={{
  //             labels: traitList.map((t) => t.name),
  //             datasets: [
  //               {
  //                 label: "Score (%)",
  //                 data: traitList.map((t) => t.score),
  //                 backgroundColor: function (context) {
  //                   const chart = context.chart;
  //                   const { ctx, chartArea } = chart;
  //                   if (!chartArea) return null;
  //                   const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  //                   gradient.addColorStop(0, "rgba(99, 102, 241, 0.9)");
  //                   gradient.addColorStop(1, "rgba(139, 92, 246, 0.8)");
  //                   return gradient;
  //                 },
  //                 borderRadius: 10,
  //                 barPercentage: 0.6,
  //                 categoryPercentage: 0.6,
  //               },
  //             ],
  //           }}
  //           options={{
  //             responsive: true,
  //             plugins: { legend: { display: false } },
  //             scales: {
  //               y: {
  //                 max: 100,
  //                 beginAtZero: true,
  //                 ticks: {
  //                   callback: (value) => `${value}%`,
  //                   color: "#6B7280",
  //                   font: { weight: "500" },
  //                 },
  //                 grid: { color: "rgba(203,213,225,0.3)", borderDash: [4, 4] },
  //               },
  //               x: {
  //                 ticks: {
  //                   color: "#4B5563",
  //                   font: { weight: "600" },
  //                 },
  //                 grid: { display: false },
  //               },
  //             },
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </section>
  // )

}
