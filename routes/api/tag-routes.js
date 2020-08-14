const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findAll({
    where: {
      category: req.params.id
    }
  }).then(dbPostData => {
    res.json(dbPostData);
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: "This is a message of my choosing."
    });
  });
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
