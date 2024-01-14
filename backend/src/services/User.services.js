const { Users, Business, Register, UsersBusiness } = require('../models');
const AuthServices = require('./auth.service');

const bcrypt = require('bcrypt');

class UserServices {
  static async create(body, businessId) {
    try {
      const existent = await Users.findOne({ where: { email: body.email } });
      if (existent) throw 'Correo ya existe';
      const result = await Users.create(body);
      await UsersBusiness.create({ userId: result.id, businessId });
      const user = { email: result.email, password: result.password, id: result.id };
      const token = await AuthServices.generateToken(user);
      delete result.password;
      return { user: result, token };
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt', 'role_id']
        },
        include: [
          {
            model: Register,
            as: 'register',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
          {
            model: Business,
            as: 'business',
            through: 'users_business',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllByBusinessId(businessId) {
    try {
      const result = await Users.findAll({
        include: [
          {
            model: Business,
            as: 'business',
            through: {
              model: UsersBusiness,
              where: { businessId }
            },
            attributes: ['id', 'name'] // Incluir solo las columnas necesarias de Business
          }
        ],
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        order: [['id', 'DESC']],
        raw: true // Obtener resultados como objetos JSON sin instancias de Sequelize
      });

      // Mapear el resultado para incluir solo las columnas necesarias y renombrar 'coin'
      const mappedResult = result.map(user => ({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        roleId: user.roleId,
        coin: user['business.users_business.coin'] // Renombrar 'coin'
      }));

      return mappedResult;
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
