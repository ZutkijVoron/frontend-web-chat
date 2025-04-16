import React from 'react';
import style from './UIButton.module.css';

/**
 * It is a function that returns an input element
 * @param {React.ButtonHTMLAttributes<React.ButtonElement>} props
 * @returns {React.ReactElement}
 */
const UIButton = ({ className, children, ...props }) => {

  return (
    <button
      {...props}
      className={[style.button, className].join(' ')}
    >
      {children}
    </button>
  );
};

export default UIButton;
