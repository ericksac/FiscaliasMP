//Creación de fisalia
const axios = require("axios");
const javaApi_url = process.env.API_JAVA_URL;
console.log(javaApi_url)
module.exports.createFiscalia = async (req, res) => {
  try {
    const { name, telephone_number, adress, latitude, longitude } = req.body;

    if (!name)
      return res.status(400).send({ message: "Se debe enviar el Nombre" });
    if (!telephone_number)
      return res
        .status(400)
        .send({ message: "Se debe enviar el número de teléfono" });
    if (!adress)
      return res.status(400).send({ message: "Se debe enviar la dirección" });

    const json_data = {
      name: name,
      telephone_number: telephone_number,
      adress: adress,
      latitude: latitude,
      longitude: longitude,
    };

    const javaApi_response = await axios.post(
      javaApi_url + "fiscalias",
      json_data
    );

    res.send({
      fiscalia: javaApi_response.data,
      message: "Fiscalia creada con éxito",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};

module.exports.getFiscalias = async (req, res) => {
  try {
    const javaApi_response = await axios.get(javaApi_url);
    const javaApi_data = javaApi_response.data;

    res.send({
      data: javaApi_data,
      message: "Éxito",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};

module.exports.getFiscaliaById = async (req, res) => {
  try {
    const id = req.params.id;

    const javaApi_response = await axios.get(javaApi_url + "fiscalias/" + id);
    const javaApi_data = javaApi_response.data;

    res.send({
      data: javaApi_data,
      message: "Éxito",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};


module.exports.deleteFiscalia = async (req, res) => {
  try {
    const id = req.params.id;

    const javaApi_response = await axios.delete(javaApi_url + "fiscalias/" + id);

    res.send({
      id: id,
      message: "Fiscalia eliminada",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};

module.exports.updateFiscalia = async (req, res) => {
  try {
    const { name, telephone_number, adress, latitude, longitude } = req.body;

    const id = req.params.id;

    if (!name)
      return res.status(400).send({ message: "Se debe enviar el nombre" });
    if (!telephone_number)
      return res
        .status(400)
        .send({ message: "Se debe enviar el número de teléfono" });
    if (!adress)
      return res.status(400).send({ message: "Se debe enviar la dirección" });
    if (!id)
      return res
        .status(400)
        .send({ message: "Se debe enviar el ID para modificar" });

    const json_data = {
      name: name,
      telephone_number: telephone_number,
      adress: adress,
      latitude: latitude,
      longitude: longitude,
    };

    const javaApi_response = await axios.put(javaApi_url + "fiscalias/" + id, json_data);

    res.send({
      id: id,
      message: "Fiscalia actualizada",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};
