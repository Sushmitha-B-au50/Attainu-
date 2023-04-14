import {configureStore} from '@reduxjs/toolkit';
import TODOReducer from '../reducer/reducer';


const store = configureStore({reducer: TODOReducer});

export default store;