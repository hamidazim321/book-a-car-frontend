// store.js
import { createStore } from 'redux';
import imageReducer from './reducers/imageReducer';

const store = createStore(imageReducer);

export default store;
