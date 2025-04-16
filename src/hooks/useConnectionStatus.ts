import { useState, useEffect } from 'react';
import axios from 'axios';

function useInternetStatus(pingUrl = 'https://httpstat.us/200', interval = 5000) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkInternet = async () => {
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
  }, [pingUrl, interval]);

  return isOnline;
}

export default useInternetStatus;
