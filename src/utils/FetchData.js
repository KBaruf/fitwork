import env from 'react-dotenv';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const FetchData = (options) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.request(options);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  getData();
  return data;
};
export const exercise_options = (url) => {
  const headers = {
    method: 'GET',
    url: `${url}`,
    headers: {
      'X-RapidAPI-Key': `${env.EXERCISE_KEY}`,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };
  return headers;
};
