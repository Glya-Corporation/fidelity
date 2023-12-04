const { Products } = require('../models');

class ProductServices {
  static async create(body) {
    try {
      const result = await Products.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Products.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllProductByBusinessId(businessId) {
    try {
      const result = await Products.findAll({ where: { businessId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateProduct(id, body) {
    try {
      const result = await Products.update(body, { where: { id } });
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteProduct(id) {
    try {
      const result = await Products.destroy({ where: { id } });
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
