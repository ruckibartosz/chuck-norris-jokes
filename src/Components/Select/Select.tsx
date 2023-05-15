import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { Option } from '@Types/options';

import style from './Select.module.scss';

type SelectProps = {
  placeholder: string;
  defaultValue?: string;
  options: Option[];
  onOptionClick: (select: string) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  onOptionClick,
  defaultValue = '',
}) => {
  const [checkedValue, setCheckedValue] = useState(defaultValue);
  const [isSelectActive, setIsSelectActive] = useState(false);

  const handleOnSelectClick = () => setIsSelectActive(!isSelectActive);
  const handleOnOptionClick = (id: string) => {
    setCheckedValue(id);
    onOptionClick(id);
  };

  return (
    <div
      onClick={handleOnSelectClick}
      className={`${style['select']} ${isSelectActive && style['select--active']} ${
        checkedValue && style['checked']
      }`}
    >
      <input
        type='text'
        className={style['select__input']}
        value={options.find((option) => option.id === checkedValue)?.name}
        placeholder={placeholder}
        readOnly
      />
      <div className={style['select__chevron']}>
        {isSelectActive ? <HiChevronUp size={22} /> : <HiChevronDown size={22} />}{' '}
      </div>
      <div className={style['select__option']}>
        {options.map(({ name, id }) => {
          return <div onClick={() => handleOnOptionClick(id)}>{name}</div>;
        })}
      </div>
    </div>
  );
};

export default Select;
