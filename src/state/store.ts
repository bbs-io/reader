import _ from 'lodash';
import { configureStore } from '@reduxjs/toolkit';

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';

// And use redux-batched-subscribe as an example of adding enhancers
import { batchedSubscribe } from 'redux-batched-subscribe';
import { reducer } from './reducer';

const initialState = undefined;

const debounceNotify = _.debounce((notify: any) => notify(), 15);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  initialState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together
