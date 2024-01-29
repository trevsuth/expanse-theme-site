'use client'

import React, { useState, useEffect } from 'react';
import SineWaveComponent from './SineWaveComponent';

const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyPress = (e: { key: string; }) => {
      if (e.key === 'a' || e.key === 'A') {
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]); // Dependency array includes isOpen to ensure the latest state is used

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <SineWaveComponent text="Page 1" />
      <SineWaveComponent text="Page 2" />
      <SineWaveComponent text="Page 3" />
      <SineWaveComponent text="Page 4" />
    </div>
  );
};

export default SidebarComponent;
