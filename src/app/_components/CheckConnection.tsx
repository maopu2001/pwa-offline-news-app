'use client';
import useInternetStatus from '@/hooks/useConnectionStatus';

const CheckConnection = () => {
  const isOnline = useInternetStatus();

  return (
    <p
      className={`absolute top-1/2 -translate-y-1/2 left-5 mx-auto w-20 py-1 mb-2 bg-foreground/10 rounded-md capitalize text-center ${
        isOnline ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {isOnline ? 'online' : 'offline'}
    </p>
  );
};

export default CheckConnection;
