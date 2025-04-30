import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Scanner from "./components/Scanner";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Graph from "./components/Graph";
import Home from './Home';      // Import Home page component
import About from './About';    // Import About page component
import API from './API';        // Import API page component
import Contact from './Contact'; // Import Contact page component

function App() {
  const [scores, setScores] = useState(null);

  const handleResult = (newScores) => {
    setScores(newScores);
    console.log("Scores updated in App component:", newScores); // Log the scores to check if they are being set correctly
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
  <div className="container mx-auto">
    <HeroSection />
    <Scanner onResult={handleResult} />
    <Graph scores={scores} />
    

  </div>
</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
