import {configureStore} from '@reduxjs/toolkit';
import {basketSlice} from './../slices/ProductSlice';


export const store = configureStore({ reducer: basketSlice.reducer })