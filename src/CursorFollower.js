import React, { useState, useEffect } from 'react';

const CursorFollower = ({ imageUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const followerStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 1000,
  };

  return <img src={imageUrl} alt="Cursor Follower" style={followerStyle} />;
};

export default CursorFollower;
