const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const storedReceipes= [
    {
      id: uuid(),
      name: "poutine",
      ingredients: "fries, cheese, gravy",
      instructions: "Mix cheese and gravy"
    },
    {
      id: uuid(),
      name: "bbb",
      ingredients: "fries, source",
      instructions: "bla bla"
    },
    {
      id: uuid(),
      name: "aaa",
      ingredients: "fries, source",
      instructions: "bla bla"
    }
];

const deletedReceipes= [];

// Main page
router.get('/', function (req, res, next) {
  return res.send("Hello");
});

// GET all stored receipes
router.get('/storedReceipes', function (req, res, next) {
  return res.send(storedReceipes);
});

// GET all deleted receipes
router.get('/deletedReceipes', function (req, res, next) {
  return res.send(deletedReceipes);
});

// ADD a new receipe to stored receipes
router.post('/storedReceipes', function (req, res, next) {
  const receipe = { id: uuid(), name: req.body.name, ingredients: req.body.ingredients, instructions: req.body.instructions };
  storedReceipes.push(receipe);
  return res.send(receipe);
});

// DELETE a receipe from stored receipes
router.delete('/storedReceipes', function (req, res, next) {
  const foundReceipe = storedReceipes.find(receipe => (receipe.id === req.body.id));
  
  if (!foundReceipe) return res.status(404).send({ message: 'Receipe not found' });
  const index = storedReceipes.indexOf(foundReceipe);
  storedReceipes.splice(index, 1);
  deletedReceipes.unshift(foundReceipe);

  return res.send(foundReceipe);
});

// RESTORE a receipe from deleted receipes
router.delete('/deletedReceipes', function (req, res, next) {
  const foundReceipe = deletedReceipes.find(receipe => (receipe.id === req.body.id));
  
  if (!foundReceipe) return res.status(404).send({ message: 'Receipe not found' });
  const index = deletedReceipes.indexOf(foundReceipe);
  deletedReceipes.splice(index, 1);
  storedReceipes.unshift(foundReceipe);

  return res.send(foundReceipe);
});

// EDIT a receipe from stored receipes
router.put('/storedReceipes', function (req, res, next) {
  console.log(req.params);
  console.log(req.body);
  console.log(storedReceipes);
  const foundReceipe = storedReceipes.find(receipe => (receipe.id === req.body.id));
  
  if (!foundReceipe) return res.status(404).send({ message: 'Receipe not found' });
  foundReceipe.name = req.body.name;
  foundReceipe.ingredients = req.body.ingredients;
  foundReceipe.instructions = req.body.instructions;

  return res.send(foundReceipe);
});

module.exports = router;

