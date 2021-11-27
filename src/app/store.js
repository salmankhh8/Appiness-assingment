import { configureStore } from "@reduxjs/toolkit";
import userReducer  from '../features/userSlice'

export default configureStore({
    reducer:{
      user: userReducer,
    },
})
// const reducer = combineReducers({
//   user: userSlice.reducer
// });

// const store = createStore(reducer);