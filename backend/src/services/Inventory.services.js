const { Inventory } = require('../models');

class InventoryServices {
  static async create(body) {
    try {
      const result = await Inventory.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllByBusinessId(businessId) {
    try {
      const result = await Inventory.findAll({
        where: { businessId },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async updateInventoryStatus(businessid, status) {
    try {
      await Inventory.update(status, { where: { businessId } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteInventory(id) {
    try {
      await Inventory.destroy();
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;