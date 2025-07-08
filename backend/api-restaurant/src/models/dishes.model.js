const pool = require('../config/db');

const getAllDishes = async () => {
    const result = await pool.query('select * from dishes');
    return result[0];
}

const getDishByCategory = async (category) => {
    const [rows] = await pool.query('SELECT * FROM dishes WHERE category = ?', [category]);
    return rows;
}

const createDish = async ({ name, description, price, available, category, imageUrl }) => {
    const [result] = await pool.query(
        `INSERT INTO dishes (name, description, price, available, category, imageUrl)
       VALUES (?, ?, ?, ?, ?, ?)`,
        [name, description, price, available, category, imageUrl]
    );
    return result[0];
}


const getDishById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM dishes where id = ?', [id])
    return rows[0]
}

const updateDishById = async (id, data) => {
    const [[existingDish]] = await pool.query('SELECT * FROM dishes WHERE id = ?', [id]);
    if (!existingDish) return { notFound: true };
    const updatedDish = {
        ...existingDish,
        ...data
    };
    const [result] = await pool.query(
        `UPDATE dishes 
         SET name = ?, description = ?, price = ?, available = ?, category = ?, imageUrl = ?
         WHERE id = ?`,
        [
            updatedDish.name,
            updatedDish.description,
            updatedDish.price,
            updatedDish.available,
            updatedDish.category,
            updatedDish.imageUrl,
            id
        ]
    );

    return result;
};

const deleteDishById = async (id) => {
    const [result] = await pool.query('DELETE FROM dishes WHERE id = ?', [id]);
    return result;
};


module.exports = { getAllDishes, createDish, getDishByCategory, getDishById, updateDishById, deleteDishById }