import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux'; 
import { borrarFiscaliaAction, obtenerFiscaliaEditar } from '../actions/fiscaliaActions';

const Fiscalia = ({fiscalia, numero}) =>{

    const {nombre, id_fiscalia, archivo_url} = fiscalia;
    const id = id_fiscalia;
    const dispatch = useDispatch();
    const history = useHistory();
    const color = (numero %2 ===0) ?"border-b border-gray-200 hover:bg-gray-100" 
    : "border-b border-gray-200 bg-gray-50 hover:bg-gray-100";
    const confirmarEliminarFiscalia = id =>{
        //Preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro(a)?',
            text: "Una Fiscalía que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                
            dispatch(borrarFiscaliaAction(id));
              
            }
          })
    } 

    const redireccionarEdicion = fiscalia =>{
        dispatch(obtenerFiscaliaEditar(fiscalia));
        history.push(`/fiscalias/editar/${fiscalia.id_fiscalia}`);
    }

    return (
        <tr className={color}>
            <td className="text-center text-green-900 w-1/2 ">{nombre}</td>
            <td className="pl-4 pr-4  pb-2 space-x-4 space-y-2 w-1/2">
                <a
                    className="py-2 px-4 border 
                    border-transparent text-sm font-medium rounded-md 
                    text-white bg-green-700 hover:bg-green-800"
                    href={archivo_url }
                    target="_blank"
                    rel="noreferrer"
                    download
                >Descargar archivo</a>
                <button 
                    type="button"
                    onClick= { () => redireccionarEdicion(fiscalia)} 
                    className="py-2 px-4 border 
                    border-transparent text-sm font-medium rounded-md 
                    text-white bg-yellow-400 hover:bg-yellow-600"
                    >Editar</button>
                <button
                    type="button"
                    className="py-2 px-4 border
                    border-transparent text-sm font-medium rounded-md 
                    text-white bg-red-700 hover:bg-red-800"
                    onClick={ () => confirmarEliminarFiscalia (id)}    
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default  Fiscalia;