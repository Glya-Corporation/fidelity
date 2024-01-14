const { Inventary } = require('../models');

class InventaryServices {
  static async create(body) {
    try {
      const result = await Inventary.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllByBusinessId(businessId) {
    try {
      const result = await Inventary.findAll({
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
  static async updateInventaryStatus(businessid, status) {
    try {
      await Inventary.update(status, { where: { businessId } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteInventary(id) {
    try {
      await Inventary.destroy();
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = InventaryServices;
