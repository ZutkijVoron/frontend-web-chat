import React from 'react';
import style from './UIInput.module.css';

/**
 * It is a function that returns an input element
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @returns {React.ReactElement}
 */
const UIInput = ({ className, ...props }) => {

  return (
    <input
      {...props}
      className={[style.input, className].join(' ')}
    />
  );
};

export default UIInput;
