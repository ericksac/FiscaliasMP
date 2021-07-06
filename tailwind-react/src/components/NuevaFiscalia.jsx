import React, {useState}  from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { crearNuevaFiscaliaAction } from '../actions/fiscaliaActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

import Upload from './Upload';
import Error from './Error'
const NuevaFiscalia = ({history}) => {
    
    //State del componente
    const [nombre, guardarNombre] = useState('');
    const [direccion, guardarDireccion] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [archivo_url, guardarArchivo] = useState(null);

    const dispatch = useDispatch();

    const cargando = useSelector(state => state.fiscalias.cargando)
    const error = useSelector(state => state.fiscalias.error)
    const alerta = useSelector(state => state.alerta.alerta)

    const agregarFiscalia = fiscalia => dispatch(crearNuevaFiscaliaAction( fiscalia ));

    const submitNuevaFiscalia= async e =>{
        e.preventDefault();

        if(nombre.trim() === '' || direccion.trim() === ''|| telefono.trim() === ''  ){

            const alerta ={
                msg: 'Todos los campos son obligatorios',
                classes: ''
            }
            dispatch (mostrarAlerta(alerta));

            return;
        }
        dispatch(ocultarAlertaAction());

        await agregarFiscalia({
            nombre,
            direccion,
            telefono,
            archivo_url
        });

        history.push('/');
    }

    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                <h2 className="text-center text-gray-900 text-2xl font-bold pb-6">
                            Agregar Nueva Fiscalía
                        </h2>
                    <div className="md:p-12 bg-gray-900 flex flex-row flex-wrap">
                        { error ? <Error mensaje="Hubo un error al guardar la fiscalía"/> : null }
                        <form
                            onSubmit = {submitNuevaFiscalia}
                            className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg"
                        >
                            <div className="flex-col flex py-3">
                                <label
                                    className="pb-2 text-gray-700 font-semibold"
                                > Nombre </label>
                                <input type="text"
                                    className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>guardarNombre( e.target.value)}
                                />
                            </div>
                            <div className="flex-col flex py-3">
                                <label
                                    className="pb-2 text-gray-700 font-semibold"
                                > Dirección </label>
                                <input type="text"
                                    className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    placeholder="Dirección"
                                    name="direccion"
                                    value={direccion}
                                    onChange={e=>guardarDireccion( e.target.value)}

                                />
                            </div>
                            <div className="flex-col flex py-3">
                                <label
                                    className="pb-2 text-gray-700 font-semibold"
                                > Teléfono </label>
                                <input type="text"
                                    className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    placeholder="telefono"
                                    name="telefono"
                                    value={telefono}
                                    onChange={e=>guardarTelefono( e.target.value)}
                                />
                            </div>
                            <div className="flex-col flex py-3">
                                <label
                                    className="pb-2 text-gray-700 font-semibold"
                                > Archivo </label>
                                <Upload parentCallback = {guardarArchivo} fiscalia={nombre}/>
                            </div> 
                            {alerta ? <Error mensaje={ alerta.msg }/> : null }                               
                            <button
                                type="submit"
                                className="my-5 w-full flex justify-center bg-green-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NuevaFiscalia;