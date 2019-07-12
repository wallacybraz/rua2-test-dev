const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Model = Sequelize.Model;
  class Usuario extends Model { }
  Usuario.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    criadoEm: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  }, {
    sequelize, 
    modelName:'usuarios',
    timestamps:false,
  } );
  Usuario.sync();
  return Usuario;
}










