import React, { useRef, useState, InputHTMLAttributes } from 'react';

import style from './Input.module.scss';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnInputChange = () => {
    if (inputRef.current?.value) {
      setIsFocused(true);
      return;
    }

    setIsFocused(false);
  };

  return (
    <div className={style['input__group']}>
      <input
        type='text'
        ref={inputRef}
        onChangeCapture={handleOnInputChange}
        className={`${style['input__element']} ${
          isFocused ? style['input__element--focused'] : ''
        }`}
        {...props}
      />
      <label className={style['input__label']}>{placeholder}</label>
    </div>
  );
};

export default Input;
