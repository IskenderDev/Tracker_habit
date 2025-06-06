import React, { useState, useEffect } from 'react';
import HabitTracker from './HabitTracker';
import Register from './Register';

const USER_KEY = 'habit-tracker-user';

export default function App() {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem(USER_KEY);
    setRegistered(!!user);
  }, []);

  return registered ? (
    <HabitTracker />
  ) : (
    <Register onComplete={() => setRegistered(true)} />
  );
}
