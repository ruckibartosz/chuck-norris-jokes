import React, { useState, createContext } from 'react';

import style from './Select.module.scss';

type SelectProps = {
  children: React.ReactNode;
  defaultValue: string;
  onOptionClick: (select: string) => void;
};

export type SelectContextType = {
  checkedValue: string;
  setCheckedValue: (value: string) => void;
  onOptionClick: (select: string) => void;
};

export const SelectContext = createContext<SelectContextType | null>(null);

const Select: React.FC<SelectProps> = ({ children, defaultValue, onOptionClick }) => {
  const [checkedValue, setCheckedValue] = useState(defaultValue);

  return (
    <div className={style['select']} tabIndex={1}>
      <SelectContext.Provider value={{ checkedValue, setCheckedValue, onOptionClick }}>
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
