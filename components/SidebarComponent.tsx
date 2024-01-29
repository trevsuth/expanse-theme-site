'use client'

import React, { useState } from 'react';
import SineWaveComponent from './SineWaveComponent';

const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isOpen ? 'Hide' : 'Show'} Sidebar
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <SineWaveComponent text="Page 1" />
        <SineWaveComponent text="Page 2" />
        <SineWaveComponent text="Page 3" />
        <SineWaveComponent text="Page 4" />
      </div>
    </>
  );
};

export default SidebarComponent;
