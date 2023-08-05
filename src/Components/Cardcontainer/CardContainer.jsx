import React from 'react';
import './CardContainer.css';

// A reusable component for wrapping multiple Card components
const CardContainer = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default CardContainer;
