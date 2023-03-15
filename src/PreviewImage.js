import React, { useState } from 'react';

const PreviewImage = ({ text, imageUrl }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowPreview(true);
    setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const previewStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 1000,
    display: showPreview ? 'block' : 'none',
  };

  return (
    <>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </button>
      <img src={imageUrl} alt="Preview" style={previewStyle} />
    </>
  );
};

export default PreviewImage;
