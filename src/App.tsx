// src/App.tsx
import React, { useState } from 'react';
import InputScreen from './InputScreen';
import ResultScreen from './ResultScreen';
import { calculatePlates, CalculationResult } from './calculator';
import './App.css';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [plateWidth, setPlateWidth] = useState<number>(0);
  const [plateLength, setPlateLength] = useState<number>(0);

  const handleCalculate = (params: {
    internalDiameter: number;
    plateWidth: number;
    plateLength: number;
    numPetals: number;
    straightFlange: number;
  }) => {
    const calculationResult = calculatePlates(params);
    setResult(calculationResult);
    setPlateWidth(params.plateWidth);
    setPlateLength(params.plateLength);
  };

  const handleBack = () => {
    setResult(null);
  };

  return (
    <div className="App">
      {result ? (
        <ResultScreen result={result} plateWidth={plateWidth} plateLength={plateLength} onBack={handleBack} />
      ) : (
        <InputScreen onCalculate={handleCalculate} />
      )}
    </div>
  );
};

export default App;
