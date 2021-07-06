import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerFiscaliasAction } from "../actions/fiscaliaActions";
import Error from "./Error";
import Fiscalia from "./Fiscalia";
const Fiscalias = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarFiscalias = () => dispatch(obtenerFiscaliasAction());
    cargarFiscalias();
  }, []);

  //obtener el state
  const fiscalias = useSelector((state) => state.fiscalias.fiscalias);
  const error = useSelector((state) => state.fiscalias.error);
  const cargando = useSelector((state) => state.fiscalias.loading);

  return (
    <Fragment>
      <h2 className="text-center text-gray-900 text-2xl font-bold pb-6">
        Listado de Fiscalías
      </h2>
      {error ? (
       		<Error mensaje="Hubo un error al cargar las fiscalías"/>
      ) : null}
      {cargando ? <p className="text-center">Cargando ... </p> : null}

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-6">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                        Nombre</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                        Acciones</th>
                  </tr>
                </thead>
                <tbody classname="bg-white divide-y divide-gray-200">
                  {fiscalias.length === 0 ? (
                    <tr>
                      <td>No hay fiscalías</td>
                      <td></td>
                    </tr>
                  ) : (
                    fiscalias.map((fiscalia, index) => (
                      <Fiscalia
                        key={fiscalia.id_fiscalia}
                        fiscalia={fiscalia}
                        numero= {index}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Fiscalias;
