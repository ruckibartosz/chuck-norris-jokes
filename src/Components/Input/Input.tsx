import React, { InputHTMLAttributes } from 'react';

import style from './Input.module.scss';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, ...props }) => {
  return (
    <div className={style['input__group']}>
      <input type='text' {...props} />
      <label className={style['input__label']}>{placeholder}</label>
    </div>
  );
};

export default Input;
