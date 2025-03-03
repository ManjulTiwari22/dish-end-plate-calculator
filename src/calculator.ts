// src/calculator.ts
export interface CalculationResult {
    crownArea: number;
    petalArea: number;
    totalSurfaceArea: number;
    usablePlateArea: number;
    totalPlatesRequired: number;
  }
  
  export const calculatePlates = (params: {
    internalDiameter: number;
    plateWidth: number;
    plateLength: number;
    numPetals: number;
    straightFlange: number;
  }): CalculationResult => {
    const { internalDiameter, plateWidth, plateLength, numPetals, straightFlange } = params;
  
    // Crown Area (Area of hemisphere)
    const crownArea = 2 * Math.PI * Math.pow(internalDiameter / 2, 2);
  
    // Petal Area (Simplified approximation)
    const petalArea = (numPetals / 20) * crownArea * (1 + straightFlange / internalDiameter);
  
    // Total Surface Area
    const totalSurfaceArea = crownArea + petalArea;
  
    // Plate Area (length x width)
    const plateArea = plateWidth * plateLength;
  
    // Usable Plate Area (90% of plate area for allowances)
    const usablePlateArea = plateArea * 0.9;
  
    // Initial Estimate
    let initialPlateCount = totalSurfaceArea / usablePlateArea;
  
    // Adjust Plate Count based on specified ranges
    let adjustedPlateCount;
    if (initialPlateCount <= 0.5) {
      adjustedPlateCount = 0.5;
    } else if (initialPlateCount <= 1) {
      adjustedPlateCount = 1.0;
    } else if (initialPlateCount <= 1.5) {
      adjustedPlateCount = 1.5;
    } else if (initialPlateCount <= 2) {
      adjustedPlateCount = 2.0;
    } else {
      adjustedPlateCount = Math.ceil(initialPlateCount * 2) / 2.0; // Round up to nearest 0.5
    }
  
    return {
      crownArea,
      petalArea,
      totalSurfaceArea,
      usablePlateArea,
      totalPlatesRequired: adjustedPlateCount,
    };
  };
  