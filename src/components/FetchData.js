import { useEffect, useState } from 'react';
import axios from 'axios';
const FetchData = (options) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.request(options);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getData();
  }, []);

  return data;
};

export default FetchData;
