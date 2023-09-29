//Estado inicial

const initialState =  {
    contador : 0
}

//Reducer  = Funcion pura
export default function contadorReducer( state = initialState , action ){
    switch( accion.type){
        case "INCREMENTAR" :{
            return {
                ...state,
                contador: state.contador + 1 
            }
        }
        case "DECREMENTAR" :{
            return{
                ...state,
                contador: state.contador - 1 
            }
        } 
        case "INCREMENTAR_5" :{
            return{
                ...state ,
                contador: state.contador + action.payload
            }
        }
        case "DECREMENTAR_5" : {
            return{
                ...state ,
                contador: state.contador - action.payload
            }
        }
        case "RESET" : {
            return {
                ...state ,
                contador : 0
            }
        }
        default : 
            return{
                state
            }
    }
}