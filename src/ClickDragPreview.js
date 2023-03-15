import React, { useState, useEffect } from 'react';
import './HoverBoxPreview.css';
const ClickDragPreview = ({ imageUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const previewStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 1000,
    display: isDragging ? 'block' : 'none',
  };

  return (
    <>
      <div>Click and drag to see the preview</div>
      {/* <img src={imageUrl} alt="Click Drag Preview" style={previewStyle} /> */}
      <img
        src={imageUrl}
        alt="Hover Box Preview"
        className={`hover-preview-image ${showPreview ? 'visible' : 'hidden'}`}
        style={{ top: position.y, left: position.x }}
      />
    </>
  );
};

export default ClickDragPreview;
