import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducer/contadorReducer';

const store = configureStore({
    reducer:{
        contador: contadorReducer
    }
})

export default store ;