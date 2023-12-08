const { Users } = require('../models');

class UserServices {
  static async create(body) {
    try {
      const result = await Users.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllByBusinessId(businessId) {
    try {
      const result = await Users.findAll({ where: { businessId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, body) {
    try {
      const result = await Users.update(body, { where: { id } });
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return { message: 'Usuario eliminado' }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;