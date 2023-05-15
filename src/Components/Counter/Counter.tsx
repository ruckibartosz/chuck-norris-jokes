import React, { useState } from 'react';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

import style from './Counter.module.scss';

type CounterProps = {
  minValue: number;
  maxValue: number;
  jumpValue?: number;
  onCounterClick: (counterVal: number, hasError: boolean) => void;
};

const Counter: React.FC<CounterProps> = ({ minValue, maxValue, onCounterClick, jumpValue = 1 }) => {
  const [counterVal, setCounterVal] = useState<string>('0');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleCounterControl = (value: string) => {
    let hasErrorVal = false;

    setHasError(hasErrorVal);

    if (value === '-' || value === '' || !isNaN(Number(value))) setCounterVal(value);
    if (Number(value) > maxValue || Number(value) < minValue) {
      setHasError(true);
      hasErrorVal = true;
    }

    if (value.includes('.') || value === '' || value == '-') {
      setHasError(true);
      hasErrorVal = true;
    }

    onCounterClick(Number(value), hasErrorVal);
  };

  const handleOnDecreaseButtonClick = () => {
    const value = String(Number(counterVal) - jumpValue);
    handleCounterControl(value);
  };

  const handleOnIncreaseButtonClick = () => {
    const value = String(Number(counterVal) + jumpValue);

    handleCounterControl(value);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    handleCounterControl(value);
  };

  return (
    <div className={`${style['counter__container']} ${hasError && style['error']}`}>
      <div className={style['counter__body']}>
        <IoIosRemoveCircleOutline onClick={handleOnDecreaseButtonClick} size={28} />
        <input onChange={handleOnInputChange} type='text' value={counterVal} />
        <IoIosAddCircleOutline onClick={handleOnIncreaseButtonClick} size={28} />
      </div>

      <div className={style['counter__error-label']}>
        You can pick a number from {minValue} to {maxValue}
      </div>
    </div>
  );
};

export default Counter;
