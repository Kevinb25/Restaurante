const { getAllDishes, getDishByCategory, getDishById, updateDishById, createDish, deleteDishById } = require("../../controllers/dishes.controller");

const router = require('express').Router();

router.get('/', getAllDishes)
router.get('/category/:category', getDishByCategory)
router.get('/:id', getDishById)
router.post('/', createDish)
router.put('/:id', updateDishById)
router.delete('/:id', deleteDishById)

module.exports = router;