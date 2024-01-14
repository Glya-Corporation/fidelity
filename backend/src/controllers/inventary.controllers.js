const { InventaryServices } = require('../services');

const createRegister = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await InventaryServices.create(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAllInventaryByBusinessId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await InventaryServices.getAllByBusinessId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateInventaryStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await InventaryServices.updateInventaryStatus(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteInventary = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await InventaryServices.deleteInventary(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createRegister, getAllInventaryByBusinessId, updateInventaryStatus, deleteInventary };
