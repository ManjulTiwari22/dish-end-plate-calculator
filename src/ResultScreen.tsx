// src/ResultScreen.tsx
import React from 'react';
import './ResultScreen.css';

interface ResultScreenProps {
  result: {
    crownArea: number;
    petalArea: number;
    totalSurfaceArea: number;
    usablePlateArea: number;
    totalPlatesRequired: number;
  };
  plateWidth: number;
  plateLength: number;
  onBack: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, plateWidth, plateLength, onBack }) => {
  return (
    <div className="result-screen">
      <h1>Crown & Petal Type Dishend</h1>
      <div className="result-card">
        <h2>Total Plates Required</h2>
        <p>{result.totalPlatesRequired}</p>
        <p>Plate Size: {plateWidth} mm x {plateLength} mm</p>
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default ResultScreen;
