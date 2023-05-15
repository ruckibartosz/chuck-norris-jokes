import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_URL } from '../Config';
import { Joke } from '@Types/joke';

const useChuckNorrisJoke = () => {
  const [joke, setJoke] = useState<Joke>({
    categories: [],
    created_at: '',
    icon_url: '',
    id: '',
    updated_at: '',
    url: '',
    value: '',
  });

  const fetchRandomChuckNorrisJoke = async () => {
    const randomJoke = await axios.get<Joke>(`${API_URL}/random`);
    setJoke(randomJoke.data);
  };

  const searchChuckNorrisJoke = async (name: string, category?: string) => {
    if (!category) {
      const randomJoke = await axios.get<Joke>(`${API_URL}/random?name=${name}`);
      setJoke(randomJoke.data);
      return;
    }

    const randomJoke = await axios.get<Joke>(`${API_URL}/random?name=${name}&category=${category}`);
    setJoke(randomJoke.data);
  };

  const fetchListOfJokes = async (numberOfJokes: number, name: string, category?: string) => {
    const arr = [];

    if (!category) {
      for (let i = 1; i <= numberOfJokes; i++) {
        const joke = await axios.get<Joke>(`${API_URL}/random?name=${name}`);
        arr.push(`${i + 1}.${joke.data.value} \n`);
      }

      return arr;
    }

    for (let i = 1; i <= numberOfJokes; i++) {
      const joke = await axios.get<Joke>(`${API_URL}/random?name=${name}&category=${category}`);
      arr.push(`${i}.${joke.data.value} \n`);
    }

    return arr;
  };

  useEffect(() => {
    fetchRandomChuckNorrisJoke();
  }, []);

  return { joke, fetchRandomChuckNorrisJoke, searchChuckNorrisJoke, fetchListOfJokes };
};

export default useChuckNorrisJoke;
