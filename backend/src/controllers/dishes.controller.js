const pool = require("../config/db")
const Dish = require('../models/dishes.model')

const getAllDishes = async (req, res, next) => {
    try {
        const result = await Dish.getAllDishes();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getDishByCategory = async (req, res, next) => {
    const { category } = req.params;

    try {
        const result = await Dish.getDishByCategory(category);
        res.status(200).json({
            message: 'Todos los platos de la categoría encontrados',
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDishById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await Dish.getDishById(id);

        if (!result) {
            return res.status(404).json({
                message: 'No se encontró ningún plato con ese ID',
            });
        }

        res.status(200).json({
            message: 'Plato encontrado exitosamente',
            data: result
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDish = async (req, res, next) => {
    try {
        const result = await Dish.createDish(req.body);
        res.status(201).json({
            message: 'Plato creado correctamente',
            data: req.body
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateDishById = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    try {
        // Verificar si el plato existe antes de actualizar
        const existingDish = await Dish.getDishById(id);

        if (!existingDish) {
            return res.status(404).json({ message: 'Plato no encontrado' });
        }

        // Realizar la actualización
        const result = await Dish.updateDishById(id, data);

        res.status(200).json({
            message: 'Plato actualizado exitosamente',
            data: { id, ...data }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteDishById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await Dish.deleteDishById(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No se encontró ningún plato con ese ID para eliminar' });
        }

        res.status(200).json({ message: 'Plato eliminado exitosamente' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllDishes, getDishByCategory, getDishById, createDish, updateDishById, deleteDishById
}