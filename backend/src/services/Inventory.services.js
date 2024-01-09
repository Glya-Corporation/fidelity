const {  } = require('../models');

class InventoryServices {
  static async create(body) {
    try {
      const result = await Users.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllByBusinessId(businessId) {
    try {
      const result = await Inventory.findAll({
        where: {businessId},
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
  static async updateUser(id, user) {
    try {
      if (user.hasOwnProperty('password')) {
        const hash = bcrypt.hashSync(user.password, 8);
        user.password = hash;
      }
      await Users.update(user, { where: { id } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async updateUserCoin(id, coin) {
    try {
      console.log(id, coin);
      await UsersBusiness.update(coin, { where: { userId: id } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
      const promises = [Users.destroy({ where: { id } }), UsersBusiness.destroy({ where: { userId: id } }), Register.destroy({ where: { userId: id } })];

      await Promise.all(promises);
      return { message: 'Usuario eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
