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
    OBTENER_FISCALIA_EDITAR,
    COMENZAR_EDICION_FISCALIA
} from '../types'

import clienteAxios, {clienteAxios2} from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos
export function crearNuevaFiscaliaAction(fiscalia ){
    return async (dispatch) =>{
        dispatch(agregarFiscalia());
        try {
            await clienteAxios.post('/fiscalia', fiscalia);

            dispatch( agregarFiscaliaExito(fiscalia) )
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        } catch (error) {
            dispatch(agregarFiscaliaError(true))

            //Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
        }
    }
}

const agregarFiscalia =()=> ({
    type: AGREGAR_FISCALIA
})

const agregarFiscaliaExito = fiscalia =>({
    type: AGREGAR_FISCALIA_EXITO,
    payload: fiscalia
})

const agregarFiscaliaError= estado =>({
    type: AGREGAR_FISCALIA_ERROR,
    payload: estado
});

export function obtenerFiscaliasAction (){
    return async (dispatch)=>{
        dispatch(descargarFiscalias());
        try {
            const respuesta = await clienteAxios2.get('/fiscalias/');
            dispatch(descargarFiscaliasExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargarFiscaliasError())
        }

    }
}

const descargarFiscalias = () =>({
    type: COMENZAR_DESCARGA_FISCALIAS,
    payload: true
});

const descargarFiscaliasExitosa = fiscalias =>({
    type:   DESCARGA_FISCALIAS_EXITO,
    payload: fiscalias
});

const descargarFiscaliasError = () =>({
    type: DESCARGA_FISCALIAS_ERROR,
    payload: true 
});

export function borrarFiscaliaAction (id) {
    return async (dispatch) =>{
        dispatch (obtenerFiscaliaEliminar(id));
        try {
            await clienteAxios.delete(`/fiscalia/${id}`);
            dispatch(eliminarFiscaliaExito());

            Swal.fire(
                'Eliminada!',
                'La fiscalía se eliminó correctamente.',
                'success'
              )
        } catch (error) {
            dispatch(eliminarFiscaliaError());
        }
    }
}

const obtenerFiscaliaEliminar = id =>({
    type: OBTENER_FISCALIA_ELIMINAR,
    payload: id
})

const eliminarFiscaliaExito = ()=> ({
    type: FISCALIA_ELIMINADO_EXITO
});

const eliminarFiscaliaError = () => ({
    type: FISCALIA_ELIMINADO_ERROR,
    payload: true
});

export function obtenerFiscaliaEditar (fiscalia){
    return (dispatch) =>{
        dispatch(obtenerFiscaliaEditarAction(fiscalia))
    }
}

const obtenerFiscaliaEditarAction = fiscalia =>({
    type: OBTENER_FISCALIA_EDITAR,
    payload: fiscalia
})

export function editarFiscaliaAction (fiscalia) {
    return async (dispatch) =>{
        dispatch(editarFiscalia(fiscalia));
        try {
            await clienteAxios.put(`/fiscalia/${fiscalia.id_fiscalia}`, fiscalia);
            dispatch(editarFiscaliaExito(fiscalia));
        } catch (error) {
            dispatch(editarFiscaliaError());
        }
    }
}

const editarFiscalia = () =>({
    type: COMENZAR_EDICION_FISCALIA
})

const editarFiscaliaExito = fiscalia =>({
    type: FISCALIA_EDITADO_EXITO,
    payload: fiscalia
})

const editarFiscaliaError = () =>({
    type: FISCALIA_EDITADO_ERROR,
    payload: true
})