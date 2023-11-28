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
  static async getAllByBusinessId(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async update(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
