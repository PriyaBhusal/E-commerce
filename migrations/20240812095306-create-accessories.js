'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accessories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discountTag: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      discountedPrice: {
        type: Sequelize.STRING
      },
      actualPrice: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.ENUM('rings', 'bags', 'lockets')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accessories');
  }
};