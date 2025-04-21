import { useState, useEffect } from 'react';
import axios from 'axios';

function useInternetStatus(url = 'https://httpstat.us/200', interval = 1000) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkInternet = async () => {
      const pingUrl = url + '?q=' + Math.random() * 1000000;
      try {
        await axios.get(pingUrl);
        setIsOnline(true);
      } catch (error) {
        setIsOnline(false);
      }
    };

    checkInternet();
    const id = setInterval(checkInternet, interval);

    return () => clearInterval(id);
  }, [url, interval]);

  console.log(isOnline);
  return isOnline;
}

export default useInternetStatus;
