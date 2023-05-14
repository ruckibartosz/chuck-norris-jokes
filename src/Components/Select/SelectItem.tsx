import React, { useContext } from 'react';

import { SelectContext } from './Select';
import { SelectContextType } from './Select';

import style from './Select.module.scss';

type SelectItemProps = {
  name: string;
  id: string;
  children: React.ReactNode;
};

const SelectItem: React.FC<SelectItemProps> = ({ children, id, name }) => {
  const { checkedValue, setCheckedValue, onOptionClick } = useContext(
    SelectContext,
  ) as SelectContextType;

  const handleOnOptionClick = () => {
    setCheckedValue(id);
    onOptionClick(id);
  };

  return (
    <>
      <input
        className={style['selectopt']}
        name={name}
        type='radio'
        id={id}
        checked={checkedValue === id ? true : false}
        onClick={handleOnOptionClick}
      />
      <label htmlFor={id} className={style['option']}>
        {children}
      </label>
    </>
  );
};

export default SelectItem;
