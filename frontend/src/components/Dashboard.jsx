// src/components/Dashboard.jsx
import { useState } from 'react';

function Dashboard({ onToggleBanner, onUpdateContent }) {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateContent({ description, link, timer });
    // Post to backend API here
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-1">Banner Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border text-black rounded w-full p-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-1">Banner Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border text-black rounded w-full p-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-1">Banner Timer (seconds)</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            className="border text-black rounded w-full p-2 bg-gray-100"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Update Banner
        </button>
        <button
          type="button"
          onClick={onToggleBanner}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Visible
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
