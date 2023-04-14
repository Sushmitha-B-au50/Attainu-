import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './reducer/reducer';

const store = configureStore({reducer: CounterReducer});

export default store;