import React from 'react';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
