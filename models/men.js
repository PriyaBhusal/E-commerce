'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class men extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  men.init({
    discountTag: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    actualPrice: DataTypes.STRING,
    discountedPrice: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    collection: DataTypes.ENUM('shirt', 'glass', 'watch')
  }, {
    sequelize,
    modelName: 'men',
  });
  return men;
};