'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kids.init({
    discountTag: DataTypes.STRING,
    Brand: DataTypes.STRING,
    description: DataTypes.STRING,
    discountedPrice: DataTypes.STRING,
    actualPrice: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    collection: DataTypes.ENUM('frock', 'boys', 'girls')
  }, {
    sequelize,
    modelName: 'Kids',
  });
  return Kids;
};