import React from 'react';

interface IButton {
  onClick: () => void;
}

const AddButton: React.FC<IButton> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  }
  
  return (
    <div className='button__wrap'>
      <div className='button'>
        <button className='button__add' type='submit' onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default AddButton;
