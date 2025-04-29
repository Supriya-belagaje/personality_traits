import React, { useEffect } from 'react';
import Results from './Results';

export default function Graph({ scores }) {
    console.log("Graph component scores:", scores); // Log the scores prop to check its value
  return (
    <div className="chart-container">

      <div className="chart-title">Personality Trait Distribution</div>
      {/* <canvas id="traitChart" ><Results scores={scores} /></canvas> */}
      
      <div id="traitChart"><Results scores={scores} /></div>
    </div>
  );
}
