//Creación de fisalia
const db = require("../models");
const Fiscalia = db.fiscalias;
const Op = db.Sequelize.Op;
module.exports.createFiscalia = async (req, res) => {
  try {
    const { nombre, direccion, telefono, archivo_url } = req.body;

    if (!nombre)
      return res.status(400).send({ message: "Se debe enviar el Nombre" });
    if (!telefono)
      return res
        .status(400)
        .send({ message: "Se debe enviar el número de teléfono" });
    if (!direccion)
      return res.status(400).send({ message: "Se debe enviar la dirección" });

    const json_data = {
      nombre,
      telefono,
      direccion,
      archivo_url,
    };

    Fiscalia.create(json_data)
    .then(Fiscalia => res.json(Fiscalia));

  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};

module.exports.getFiscalias = async (req, res) => {
  Fiscalia.findAll({ where: { } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedió un error al devolver las fiscalias"
      });
    });
};

module.exports.getFiscaliaById = async (req, res) => {
  try {
    const id = req.params.id;
    Fiscalia.findAll({ where: { id_fiscalia: id} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedió un error al devolver las fiscalias"
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error en la petición-> " + error.message });
  }
};


module.exports.deleteFiscalia = async (req, res) => {
  const id = req.params.id;

  Fiscalia.destroy({
    where: { id_fiscalia: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La fiscalía se ha eliminado con éxito!"
        });
      } else {
        res.send({
          message: `No se puede borrar la fiscalía id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar la fiscalía con id=" + id
      });
    });
};

module.exports.updateFiscalia = async (req, res) => {
  const id = req.params.id;

  const { nombre, direccion, telefono, archivo_url } = req.body;

  if (!nombre)
    return res.status(400).send({ message: "Se debe enviar el Nombre" });
  if (!telefono)
    return res
      .status(400)
      .send({ message: "Se debe enviar el número de teléfono" });
  if (!direccion)
    return res.status(400).send({ message: "Se debe enviar la dirección" });

  const json_data = {
    nombre,
    telefono,
    direccion,
    archivo_url,
  };

  Fiscalia.update(json_data, {
    where: { id_fiscalia: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La fiscalía fue modificada con éxito"
        });
      } else {
        res.send({
          message: `No se puede actualizar la fiscalía id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar la fiscalía con id=" + id
      });
    });
};
