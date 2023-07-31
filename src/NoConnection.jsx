// NoInternetPage.js
import React, { useEffect, useState } from 'react';

const NoInternetPage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>No Internet Connection</h2>
          <p>Please check your internet connection and try again.</p>
        </div>
      )}
    </div>
  );
};

export default NoInternetPage;
