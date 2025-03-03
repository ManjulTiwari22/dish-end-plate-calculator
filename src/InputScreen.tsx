// src/InputScreen.tsx
import React, { useState } from 'react';
import './InputScreen.css';

interface InputScreenProps {
  onCalculate: (params: {
    internalDiameter: number;
    plateWidth: number;
    plateLength: number;
    numPetals: number;
    straightFlange: number;
  }) => void;
}

const InputScreen: React.FC<InputScreenProps> = ({ onCalculate }) => {
  const [internalDiameter, setInternalDiameter] = useState<number>(0);
  const [plateWidth, setPlateWidth] = useState<number>(0);
  const [plateLength, setPlateLength] = useState<number>(0);
  const [numPetals, setNumPetals] = useState<number>(0);
  const [straightFlange, setStraightFlange] = useState<number>(0);

  const handleCalculate = () => {
    // Perform the calculation
    onCalculate({
      internalDiameter,
      plateWidth,
      plateLength,
      numPetals,
      straightFlange,
    });

    // Clear the input fields
    setInternalDiameter(0);
    setPlateWidth(0);
    setPlateLength(0);
    setNumPetals(0);
    setStraightFlange(0);
  };

  return (
    <div className="input-screen">
      <h1>Crown & Petal Type Dishend</h1>
      <div className="input-field">
        <label>Internal Diameter (mm)</label>
        <input
          type="number"
          value={internalDiameter}
          onChange={(e) => setInternalDiameter(Number(e.target.value))}
          required
        />
      </div>
      <div className="input-field">
        <label>Plate Width (mm)</label>
        <input
          type="number"
          value={plateWidth}
          onChange={(e) => setPlateWidth(Number(e.target.value))}
          required
        />
      </div>
      <div className="input-field">
        <label>Plate Length (mm)</label>
        <input
          type="number"
          value={plateLength}
          onChange={(e) => setPlateLength(Number(e.target.value))}
          required
        />
      </div>
      <div className="input-field">
        <label>Number of Petals</label>
        <input
          type="number"
          value={numPetals}
          onChange={(e) => setNumPetals(Number(e.target.value))}
          required
        />
      </div>
      <div className="input-field">
        <label>Straight Flange (mm)</label>
        <input
          type="number"
          value={straightFlange}
          onChange={(e) => setStraightFlange(Number(e.target.value))}
          required
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default InputScreen;
