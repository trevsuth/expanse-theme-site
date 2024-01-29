'use client'

import { useEffect, useRef } from 'react';
import { initializeSineWave } from '../utils/sineWave';

interface SineWaveComponentProps {
  text: string;
}

const SineWaveComponent: React.FC<SineWaveComponentProps> = ({ text }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initializeSineWave(canvasRef.current);
    }
  }, []);

  return (
    <div>
      <p className="sine-wave-text">{text}</p>
      <div className="red-square">
        <canvas ref={canvasRef} id="sineWaveCanvas"></canvas>
      </div>
    </div>
  );
};

export default SineWaveComponent;
