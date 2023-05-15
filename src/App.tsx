import React, { useState } from 'react';

import useChuckNorrisJoke from '@Hooks/useChuckNorrisJoke';
import JokeCard from '@Components/JokeCard';
import { saveVariableToFile } from '@Utils/saveVariableToFile';

import '@Styles/_main.scss';

const App: React.FC = () => {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [impersonateVal, setImpersonateVal] = useState<string>('');
  const [categoryVal, setCategoryVal] = useState<string>('');
  const [avatar, setAvatar] = useState<string>(
    'https://integracyjne.pl/galleries/332/750x400_sobowtor-chucka-norrisa.jpg',
  );
  const {
    joke: { value },
    searchChuckNorrisJoke,
    fetchRandomChuckNorrisJoke,
    fetchListOfJokes,
  } = useChuckNorrisJoke();

  const handleGenerateJokeClick = () => {
    if (!impersonateVal) {
      fetchRandomChuckNorrisJoke();
      setAvatar('https://integracyjne.pl/galleries/332/750x400_sobowtor-chucka-norrisa.jpg');
      return;
    }

    searchChuckNorrisJoke(impersonateVal, categoryVal);
    setAvatar(
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx1Fs1skCKkrEl9xPEKpItlCId3mO5sXYeLEM11f2VWgaBAqSr',
    );
  };

  const handleOnJokeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpersonateVal(e.target.value);
  };

  const handleOnCounterChange = (counterVal: number) => {
    setCounterValue(counterVal);
  };

  const handleCategorySelect = (category: string) => setCategoryVal(category);

  const handleOnSaveJokesClick = async () => {
    const listOfJokes = await fetchListOfJokes(
      counterValue,
      impersonateVal ? impersonateVal : 'Chuck Norris',
      categoryVal,
    );

    saveVariableToFile(listOfJokes, 'text/plain', 'list-of-jokes');
  };

  return (
    <JokeCard
      avatarUrl={avatar}
      joke={value}
      onCategorySelect={handleCategorySelect}
      onGenerateJokeClick={handleGenerateJokeClick}
      onInputChange={handleOnJokeInputChange}
      onCounterValueChange={handleOnCounterChange}
      onSaveJokesClick={handleOnSaveJokesClick}
    />
  );
};

export default App;
