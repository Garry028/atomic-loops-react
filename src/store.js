import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'
import { addPostReducer, getPostsReducer } from './reducers/postReducers'
// import { cartReducer } from './reducers/cartReducer'

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {}

const reducer = combineReducers({
  addPost: addPostReducer,
  posts: getPostsReducer
})
const initialState = {
  //
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
