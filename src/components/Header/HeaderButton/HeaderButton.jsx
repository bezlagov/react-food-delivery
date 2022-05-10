import React from 'react';

const HeaderButton = (props) => {
  return (
    <button className={`button ${props.buttonType} ${props.buttonClassName}`} onClick={null}>
      <span className={props.spanClassName}></span>
      <span className='button-text'>{props.text}</span>
    </button>
  );
};

export default HeaderButton;