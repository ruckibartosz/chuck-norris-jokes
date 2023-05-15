import React, { useState } from 'react';

import { Card } from '@Components/Card';
import Select from '@Components/Select';
import Input from '@Components/Input';
import Counter from '@Components/Counter';

type JokeCardProps = {
  joke: string;
  avatarUrl: string;
  onCategorySelect: (e: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateJokeClick: () => void;
  onSaveJokesClick: () => void;
  onCounterValueChange: (counterVal: number, hasCounterError: boolean) => void;
};

const JokeCard: React.FC<JokeCardProps> = ({
  joke,
  avatarUrl,
  onCategorySelect,
  onInputChange,
  onGenerateJokeClick,
  onSaveJokesClick,
  onCounterValueChange,
}) => {
  const [impersonateVal, setImpersonateVal] = useState('Chuck Norris');
  const [hasCounterError, setHasCounterError] = useState(false);
  const [counterVal, setCounterVal] = useState(0);

  const handleOnImpersonateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    setImpersonateVal(e.target.value);
  };

  const handleOnCounterChange = (val: number, hasError: boolean) => {
    setCounterVal(val);
    setHasCounterError(hasError);

    onCounterValueChange(val, hasError);
  };

  return (
    <Card.Container>
      <Card.Header>
        <img src={avatarUrl} alt='avatar' />
        <div>
          <q>{joke}</q>
        </div>
      </Card.Header>
      <Card.Body>
        <Select
          onOptionClick={onCategorySelect}
          placeholder='Select category'
          options={[
            { name: 'Explicit', id: 'explicit' },
            { name: 'Travel', id: 'travel' },
          ]}
        />
        <Input
          type='text'
          onChange={handleOnImpersonateInputChange}
          placeholder='Impersonate Chuck Norris'
        />
        <button className='primary' onClick={onGenerateJokeClick}>
          Draw a random {impersonateVal ? impersonateVal : 'Chuck Norris'} Joke
        </button>
      </Card.Body>
      <Card.Footer>
        <Counter minValue={1} maxValue={100} onCounterClick={handleOnCounterChange} />
        <button
          onClick={onSaveJokesClick}
          className={`${hasCounterError || counterVal === 0 ? 'secondary' : 'primary'}`}
          disabled={hasCounterError || counterVal == 0 ? true : false}
        >
          Save Jokes
        </button>
      </Card.Footer>
    </Card.Container>
  );
};

export default JokeCard;
