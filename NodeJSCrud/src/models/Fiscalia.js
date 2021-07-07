module.exports = (sequelize, Sequelize) => {
  const Fiscalia = sequelize.define("fiscalias", {
    id_fiscalia: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    direccion: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    archivo_url: {
      type: Sequelize.STRING,
    },
  },{freezeTableName: true, timestamps: false} );

  return Fiscalia;
};
