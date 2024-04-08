import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addPost, getPosts } from '../actions/postActions'
import NewPostForm from './NewPostForm'
const PostsList = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { stateLoading, postsData, error } = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const handleCreatePost = postData => {
    dispatch(addPost(postData))
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const handleDetails = (id) => {
    navigate(`posts/${id}`)
  }

  return (
    <>
      <div className='relative overflow-x-auto'>
        <button
          onClick={toggleModal}
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4'
        >
          Create New Post
        </button>
        {showModal && <NewPostForm onCreatePost={handleCreatePost} />}

        <table className='w-full text-sm shadow-xl text-left rtl:text-right text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-400 border-b border-gray-400 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Body
              </th>
            </tr>
          </thead>
          {!stateLoading && postsData?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan='3'>No posts found.</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {postsData?.map(post => (
                <tr
                  key={post.id}
                  className='border-b border-gray-400 cursor-pointer bg-gray-200'
                  onClick={() => handleDetails(post.id)}
                >
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap ' >
                    {post.id}
                  </td>
                  <td className='px-6 py-4'>{post.title}</td>
                  <td className='px-6 py-4'>{post.body}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  )
}

export default PostsList
