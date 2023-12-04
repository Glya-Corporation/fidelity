const { ProductServices } = require('../services');

const createProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ProductServices.create(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ProductServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllProductByBusinessId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ProductServices.getAllProductByBusinessId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await ProductServices.updateProduct(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ProductServices.deleteProduct(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct };

