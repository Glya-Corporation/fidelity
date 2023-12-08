const { Users, UsersBusiness } = require('../models');

class UserServices {
  static async create(body, businessId) {
    try {
      console.log({ body, businessId });
      const result = await Users.create(body);
      await UsersBusiness.create({ userId: result.id, businessId });
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
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
