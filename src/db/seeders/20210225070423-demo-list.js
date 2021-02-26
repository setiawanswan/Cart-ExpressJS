'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('lists', [{
      kode_sku: 10,
      nama_barang: 'Obat Pusing',
      foto_barang: 'Gambar 1',
      qty: 1,
      harga_satuan: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
