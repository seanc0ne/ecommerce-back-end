const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res, ) => {
  CategoryfindOne({
    attributes: [
      'id',
      'category_name'
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ 'No category found with this ID.' });
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
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
