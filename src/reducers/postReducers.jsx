import {
  ADD_POST_FAILS,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_POSTS_FAILS,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../constants/postConstants'

export const addPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { stateLoading: true }
    case ADD_POST_SUCCESS:
      return { stateLoading: false, data: action.payload }
    case ADD_POST_FAILS:
      return { stateLoading: false, error: action.payload }
    default:
      return state
  }
}

export const getPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { stateLoading: true }
    case GET_POSTS_SUCCESS:
      return { stateLoading: false, postsData: action.payload }
    case GET_POSTS_FAILS:
      return { stateLoading: false, error: action.payload }
    default:
      return state
  }
}
