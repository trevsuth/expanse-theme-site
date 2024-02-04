// components/ZipCodeInput.tsx
import React, { useState } from 'react';

interface ZipCodeInputProps {
  onZipSubmit: (zipCode: string) => void; // Callback to pass the ZIP code back to the parent component
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({ onZipSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from causing a page reload
    onZipSubmit(zipCode); // Call the callback function passed from the parent component
    setZipCode(''); // Optional: Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Enter ZIP code"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default ZipCodeInput;
