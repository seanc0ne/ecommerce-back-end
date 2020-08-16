const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res, next) => {
  const category = await Categories.find();
  res.status(200).json(category);
});

  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res, next) => {
  const { limit, skip, By, sdir } = req.query;

  const { id } = req.params;

  const products = await Categories.find ({
    id: id
  })
    .populate({
      path: 'products',
      options: {
        sort: By
      }
    })
    .limit(+limit)
    .skip(+skip)
    .exec();
  products.to;

  res.status(200).json(products);
});

  // create a new category
router.post('/add', async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = new Categories({
      name
    });
    await category.save();
    res.status(200).json(` Success `);
  } catch (err) {
    err.statusCode = 422;
    next(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
