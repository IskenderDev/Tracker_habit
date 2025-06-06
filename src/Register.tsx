import React, { useState } from 'react';

const STORAGE_KEY = 'habit-tracker-user';

interface Props {
  onComplete: () => void;
}

export default function Register({ onComplete }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    if (username.trim() && password.trim()) {
      const user = { username: username.trim(), password: password.trim() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h1 className="text-2xl font-bold mb-4">Регистрация</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <button
          onClick={register}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}
