const { UserServices } = require('../services');
const transporter = require('../utils/mailer');
const template = require('../template/template');

const createUser = async (req, res, next) => {
  try {
    const body = req.body;
    const { businessId } = req.params;
    const result = await UserServices.create(body, businessId);
    res.status(201).json(result);
    console.log(result);
    transporter.sendMail({
      from: 'corporationglya@gmail.com',
      to: result.user.email,
      subject: 'Bienvenido a Fidelity',
      text: `¡Hola! ${result.user.name} bienvenido a Fidelity`,
      html: template(result.user)
    });
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllUserByBusinessId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getByBusinessId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await UserServices.updateUser(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const updateUserCoin = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await UserServices.updateUserCoin(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createUser, getUser, getAllUserByBusinessId, updateUser, updateUserCoin, deleteUser };
