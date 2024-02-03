'use client'

import React, { useState } from 'react';
import getCoordFromZip from '../../utils/getCoordFromZip';

const TestCoordFromZip: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [output, setOutput] = useState('');

  const handleLookup = async () => {
    const result = await getCoordFromZip(zipCode);
    setOutput(JSON.stringify(result, null, 2));
  };

  return (
    <div>
      <h1>Test Coordinate Lookup</h1>
      <input
        type="text"
        value={zipCode}
        placeholder="Enter ZIP code"
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={handleLookup}>Lookup Coordinates</button>
      <pre>{output}</pre>
    </div>
  );
};

export default TestCoordFromZip;
