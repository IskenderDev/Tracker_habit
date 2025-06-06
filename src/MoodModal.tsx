import React from 'react';

interface MoodModalProps {
  options: string[];
  onSelect: (mood: string) => void;
  onClose: () => void;
}

export default function MoodModal({ options, onSelect, onClose }: MoodModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg mb-2">Выберите настроение</h2>
        <div className="flex justify-center gap-4 mb-4">
          {options.map(option => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="text-2xl"
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
