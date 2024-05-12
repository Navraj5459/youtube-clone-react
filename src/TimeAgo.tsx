import React, { useEffect, useState } from 'react';

interface Props{
    dateTime: string
}
const TimeAgo = ({ dateTime }: Props) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateTimeAgo = () => {
      const timestamp = new Date(dateTime).getTime();
      const now = Date.now();
      const elapsed = now - timestamp;
      const seconds = Math.floor(elapsed / 1000);
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        setTimeAgo(`${interval} years ago`);
        return;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        setTimeAgo(`${interval} months ago`);
        return;
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        setTimeAgo(`${interval} days ago`);
        return;
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        setTimeAgo(`${interval} hours ago`);
        return;
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        setTimeAgo(`${interval} minutes ago`);
        return;
      }
      setTimeAgo(`${Math.floor(seconds)} seconds ago`);
    };

    updateTimeAgo();
    const intervalId = setInterval(updateTimeAgo, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [dateTime]);

  return (
    <span>{timeAgo}</span>
  )
};

export default TimeAgo;
