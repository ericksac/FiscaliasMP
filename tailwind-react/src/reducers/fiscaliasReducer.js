import {
    AGREGAR_FISCALIA_ERROR,
    AGREGAR_FISCALIA,
    AGREGAR_FISCALIA_EXITO,
    COMENZAR_DESCARGA_FISCALIAS,
    DESCARGA_FISCALIAS_EXITO,
    DESCARGA_FISCALIAS_ERROR,
    FISCALIA_ELIMINADO_ERROR,
    FISCALIA_ELIMINADO_EXITO,
    OBTENER_FISCALIA_ELIMINAR,
    FISCALIA_EDITADO_ERROR,
    FISCALIA_EDITADO_EXITO,
    OBTENER_FISCALIA_EDITAR
} from '../types'

//Cada reducer tiene su propio state
const initialState = {
    fiscalias: [],
    error : null,
    loading: false,
    fiscaliaeliminar: null,
    fiscaliaeditar: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export  default  ( state = initialState, action) => {
    switch(action.type){
       case AGREGAR_FISCALIA:
       case COMENZAR_DESCARGA_FISCALIAS:
       case FISCALIA_ELIMINADO_ERROR: 
       case FISCALIA_EDITADO_ERROR:
           return {
               ...state,
               loading: true
           }
        case AGREGAR_FISCALIA_EXITO:
            return {
                ...state,
                loading: false,
                fiscalias: [...state.fiscalias, action.payload ]
            }
        case AGREGAR_FISCALIA_ERROR:
        case DESCARGA_FISCALIAS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_FISCALIAS_EXITO:
             return{
                 ...state,
                 loading: false,
                 error: null,
                 fiscalias: action.payload
             }
        case OBTENER_FISCALIA_ELIMINAR:
            return{
                ...state,
                fiscaliaeliminar: action.payload
            }
        case FISCALIA_ELIMINADO_EXITO:
            return {
                ...state,
                fiscalias: state.fiscalias.filter( 
                    fiscalia => fiscalia.id_fiscalia !== state.fiscaliaeliminar ),
                fiscaliaeliminar: null
             }
        case OBTENER_FISCALIA_EDITAR:
            return {
                ...state,
                fiscaliaeditar: action.payload
            }
        case FISCALIA_EDITADO_EXITO:
            return{
                ...state,
                fiscaliaeditar: null,
                fiscalias: state.fiscalias.map(fiscalia=> 
                    fiscalia.id_fiscalia === action.payload.id_fiscalia ? fiscalia = action.payload:
                    fiscalia
                )
            }
        default: 
        return state; 
    }
}