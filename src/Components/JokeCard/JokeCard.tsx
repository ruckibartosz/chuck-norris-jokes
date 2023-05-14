import React, { useState } from 'react';

import { Card } from '@Components/Card';
import { Select } from '@Components/Select';
import Input from '@Components/Input';

type JokeCardProps = {
  joke: string;
  avatarUrl: string;
  onCategorySelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateJokeClick: () => void;
  onSaveJokesClick: () => void;
};

const JokeCard: React.FC<JokeCardProps> = ({
  joke,
  avatarUrl,
  onCategorySelect,
  onInputChange,
  onGenerateJokeClick,
  onSaveJokesClick,
}) => {
  const [impersonateVal, setImpersonateVal] = useState('Chuck Norris');

  const handleOnImpersonateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    setImpersonateVal(e.target.value);
  };

  return (
    <Card.Container>
      <Card.Header>
        <img src={avatarUrl} alt='avatar' />
        {joke}
      </Card.Header>
      <Card.Body>
        <Select.Container onOptionClick={(e) => console.log('e = ', e)} defaultValue='opt2'>
          <Select.Item name='opt1' id='opt1'>
            Opcja 1
          </Select.Item>
          <Select.Item name='opt2' id='opt2'>
            Opcja 2
          </Select.Item>
        </Select.Container>
        <Input
          type='text'
          onChange={handleOnImpersonateInputChange}
          placeholder='Impersonate Chuck Norris'
        />

        <button onClick={onGenerateJokeClick}>
          Draw a random {impersonateVal ? impersonateVal : 'Chuck Norris'} joke
        </button>
      </Card.Body>
      <Card.Footer>
        <button onClick={onSaveJokesClick} className='secondary'>
          Save jokes
        </button>
      </Card.Footer>
    </Card.Container>
  );
};

export default JokeCard;
