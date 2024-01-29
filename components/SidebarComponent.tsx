import React from 'react';
import SineWaveComponent from './SineWaveComponent';

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <SineWaveComponent text="Page 1" />
      <SineWaveComponent text="Page 2" />
      <SineWaveComponent text="Page 3" />
      <SineWaveComponent text="Page 4" />
    </div>
  );
};

export default SidebarComponent;
