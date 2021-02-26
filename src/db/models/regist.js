'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Regist.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    nomor: DataTypes.INTEGER,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Regist',
  });
  return Regist;
};