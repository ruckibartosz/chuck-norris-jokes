import React, { useState } from 'react';

import useChuckNorrisJoke from '@Hooks/useChuckNorrisJoke';
import JokeCard from '@Components/JokeCard';

import '@Styles/_main.scss';

const App: React.FC = () => {
  const {
    joke: { value },
    searchChuckNorrisJoke,
    fetchRandomChuckNorrisJoke,
  } = useChuckNorrisJoke();
  const [impersonateVal, setImpersonateVal] = useState<string>('');

  const handleGenerateJokeClick = () => {
    if (!impersonateVal) {
      fetchRandomChuckNorrisJoke();
      return;
    }
    
    searchChuckNorrisJoke('travel', impersonateVal);
  };

  const handleOnJokeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpersonateVal(e.target.value);
  };

  return (
    <JokeCard
      avatarUrl='https://fwcdn.pl/nph/1032473/2018/13453.13.jpg'
      joke={value}
      onCategorySelect={() => {}}
      onGenerateJokeClick={handleGenerateJokeClick}
      onInputChange={handleOnJokeInputChange}
      onSaveJokesClick={() => {}}
    />
  );
};

export default App;
