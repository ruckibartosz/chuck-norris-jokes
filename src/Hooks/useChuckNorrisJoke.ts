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
    setJoke(randomJoke.data as unknown as Joke);
  };

  const searchChuckNorrisJoke = async (category: string, name: string) => {
    const randomJoke = await axios.get<Joke>(`${API_URL}/random?name=${name}&category=${category}`);
    setJoke(randomJoke.data as unknown as Joke);
  };

  useEffect(() => {
    fetchRandomChuckNorrisJoke();
  }, []);

  return { joke, fetchRandomChuckNorrisJoke, searchChuckNorrisJoke };
};

export default useChuckNorrisJoke;
