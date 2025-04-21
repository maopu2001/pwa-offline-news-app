import { useState, useEffect } from 'react';

function useInternetStatus(interval = 1000) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkInternet = () => {
      if (navigator) setIsOnline(navigator.onLine);
    };

    checkInternet();
    const id = setInterval(checkInternet, interval);

    return () => clearInterval(id);
  }, [interval]);

  return isOnline;
}

export default useInternetStatus;
