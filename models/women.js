'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class women extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  women.init({
    discountTag: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    actualPrice: DataTypes.STRING,
    discountedPrice: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    collection: DataTypes.ENUM('kurthi', 'tops', 'dresses')
  }, {
    sequelize,
    modelName: 'women',
  });
  return women;
};