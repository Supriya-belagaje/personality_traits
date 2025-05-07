// export default function HeroSection() {
//     return (
//       <section className="hero">
//         <h1 >Advanced Personality Analysis</h1>
//         <p >
//           Uncover deep insights into personality traits using our AI-powered system.
//           Get comprehensive OCEAN and DISC profile assessments from any text.
//         </p>
//       </section>
//     );
//   }
  
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-100 to-white py-20 px-6 text-center shadow-sm mb-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          🧠 Advanced Personality Analysis
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Uncover deep insights into personality traits with our AI-powered scanner.<br />
          Instantly get comprehensive <span className="text-blue-600 font-medium">OCEAN</span> and <span className="text-purple-600 font-medium">DISC</span> profile assessments from any text.
        </p>
        <a
          href="#scanner"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Try It Now
        </a>
      </div>
    </section>
  );
}
