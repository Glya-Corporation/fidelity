const { Users, UsersBusiness, Business } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Users.findOne({
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      const business = await UsersBusiness.findOne({ where: { userId: result.id }, attributes: ['userId', 'businessId'] });
      const user = { ...result, ...business };
      console.log(user);
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? result : isValid;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }
  static generateToken(user) {
    try {
      const token = jwt.sign(user, process.env.SECRET_KEY, {
        algorithm: 'HS512'
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
