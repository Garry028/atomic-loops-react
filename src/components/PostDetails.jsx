import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post details:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white shadow-xl rounded-md p-6 mb-4 max-w-xl mx-auto cursor-pointer">
      <div className='flex gap-x-4 items-center mb-4'>
        <span className="text-4xl font-bold rounded-full px-2 bg-gray-500">{post.id}</span>
        <h2 className="text-xl font-bold">{post.title}</h2>
      </div>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default PostDetails;
