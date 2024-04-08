import {
  ADD_POST_FAILS,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_POSTS_FAILS,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../constants/postConstants'

export const addPost = postData => async dispatch => {
  try {
    dispatch({ type: ADD_POST_REQUEST })
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...postData })
    }

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      config
    )
    const data = await response.json()

    if (!response.ok) {
      dispatch({
        type: ADD_POST_FAILS,
        payload: error.message || 'Failed to add post'
      })
    }

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADD_POST_FAILS,
      payload: error.message || 'An error occurred'
    })
  }
}

export const getPosts = () => async dispatch => {
  try {
    dispatch({ type: GET_POSTS_REQUEST })

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    if (!response.ok) {
      dispatch({
        type: GET_POSTS_FAILS,
        payload: error.message || 'Failed to fetch posts'
      })
    }

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
