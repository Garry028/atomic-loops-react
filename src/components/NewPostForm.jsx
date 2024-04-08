import React, { useState } from 'react';

const NewPostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setuserId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreatePost({ userId, title, body });
    setTitle('');
    setBody('');
    setuserId('');
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-lg overflow-hidden shadow-md">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            UserID:
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
            className="mt-1 ring-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Body:
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
