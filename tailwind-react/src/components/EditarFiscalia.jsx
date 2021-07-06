import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarFiscaliaAction } from "../actions/fiscaliaActions";
import { useHistory } from "react-router-dom";
import Upload from "./Upload";
const EditarFiscalia = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fiscalia, guardarFiscalia] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    archivo_url: "",
  });

  const fiscaliaEditar = useSelector((state) => state.fiscalias.fiscaliaeditar);

  useEffect(() => {
    guardarFiscalia(fiscaliaEditar);
  }, [fiscaliaEditar]);

  const onChangeFormulario = (e) => {
    guardarFiscalia({
      ...fiscalia,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, direccion, telefono } = fiscalia;

  const cambiarArchivoUrl = (url) => {
    guardarFiscalia({
      ...fiscalia,
      archivo_url: url,
    });
  };

  const submitEditarFiscalia = (e) => {
    e.preventDefault();

    dispatch(editarFiscaliaAction(fiscalia));
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <h2 className="text-center text-gray-900 text-2xl font-bold pb-6">
            Editar Fiscalía
          </h2>

          <div className="md:p-12 bg-gray-900 flex flex-row flex-wrap">
            <form
              onSubmit={submitEditarFiscalia}
              className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg"
            >
              <div className="flex-col flex py-3">
                <label
                    className="pb-2 text-gray-700 font-semibold"
                > Nombre del Producto </label>
                <input
                  type="text"
                  className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="flex-col flex py-3">
                <label
                    className="pb-2 text-gray-700 font-semibold"
                > Dirección </label>
                <input
                  type="text"
                  className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                  placeholder="Direccion"
                  name="direccion"
                  value={direccion}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="flex-col flex py-3">
                <label
                    className="pb-2 text-gray-700 font-semibold"
                > Teléfono </label>
                <input
                  type="text"
                  className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                  placeholder="Precio del Producto"
                  name="telefono"
                  value={telefono}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="flex-col flex py-3">
                <label
                    className="pb-2 text-gray-700 font-semibold"
                > Archivo </label>
                <Upload parentCallback={cambiarArchivoUrl} fiscalia={nombre} />
              </div>
              <button
                type="submit"
                className="my-5 w-full flex justify-center bg-yellow-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarFiscalia;
