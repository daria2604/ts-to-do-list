import React from 'react';

interface IButton {
  onClick: () => void;
}

const CloseButton: React.FC<IButton> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  
  return <button className='close' onClick={handleClick}></button>;
};

export default CloseButton;
