const { AuthServices } = require('../services');

const login = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.login(credentials);
    
    if (result) {
      const { email, password, id, roleId, name, surname, businessId } = result;
      const token = await AuthServices.generateToken({ email, password, id });
      const user = { id, name, surname, email, number, isVerify, role, business };
      res.status(200).json({ user, token });
    } else {
      res.status(400).json({ message: 'Contraseña incorrecta' });
    }
  } catch (error) {
    next({
      status: 400,
      message: error.message,
      errorContent: error
    });
  }
};

module.exports = login;
