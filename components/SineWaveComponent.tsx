'use client'

import { useEffect, useRef } from 'react';
import { initializeSineWave } from '../utils/sineWave';

const SineWaveComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      initializeSineWave(canvasRef.current);
    }
  }, []);

  return (
    <div className="red-square">
      <canvas ref={canvasRef} id="sineWaveCanvas"></canvas>
    </div>
  );
};

export default SineWaveComponent;
