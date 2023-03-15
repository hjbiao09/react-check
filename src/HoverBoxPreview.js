import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './HoverBoxPreview.css';

const HoverBoxPreview = ({ imageUrl }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const previewStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 1000,
    display: showPreview ? 'block' : 'none',
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  <Button variant="contained">Contained</Button>;
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Button variant="contained">Contained</Button>
      {/* <img src={imageUrl} alt="Hover Box Preview" style={previewStyle} /> */}
      <img
        src={imageUrl}
        alt="Hover Box Preview"
        className={`hover-preview-image ${showPreview ? 'visible' : 'hidden'}`}
        style={{ top: position.y, left: position.x }}
      />
    </div>
  );
};

export default HoverBoxPreview;
