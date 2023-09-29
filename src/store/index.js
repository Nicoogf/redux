import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        contador: reducerContador,
        carrito : reducerCarrito
    }
})

export default store ;