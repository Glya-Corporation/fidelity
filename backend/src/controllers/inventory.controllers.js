const { InventoryServices } = require('../services');

const create = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await InventoryServices.create(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAllInventoryByBusinessId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await InventoryServices.getAllByBusinessId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateInventoryStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await InventoryServices.updateInventoryStatus(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteInventory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await InventoryServices.deleteInventory(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { create, getAllInventoryByBusinessId, updateInventoryStatus, deleteInventory };
