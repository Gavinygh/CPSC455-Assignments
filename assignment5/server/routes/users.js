const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const {storedReceipes, deletedReceipes} = require('../db/model');

// GET all stored receipes
router.get('/storedReceipes', async function (req, res, next) {
   const receipes = await storedReceipes.find({});
   try {
    return res.send(receipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET all deleted receipes
router.get('/deletedReceipes', async function (req, res, next) {
  const receipes = await deletedReceipes.find({});
  try {
   return res.send(receipes);
 } catch (error) {
   res.status(500).send(error);
 }
});

// ADD a new receipe to stored receipes
router.post('/storedReceipes', async function (req, res, next) {
    const receipe = new storedReceipes({
      _id: uuid(),
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      completion_time: req.body.completion_time
    });
    try {
      await receipe.save();
      return res.send(receipe);
    } catch (error) {
      return res.status(500).send(error);
    }
});

// DELETE a receipe from stored receipes
router.delete('/storedReceipes', async function (req, res, next) {
  try {
    const receipe = await storedReceipes.findByIdAndDelete(req.body._id);
    if (!receipe) res.status(404).send("No receipe found");
    const newDeletedReceipe = new deletedReceipes(
      {
        _id: uuid(),
        name: receipe.name,
        ingredients: receipe.ingredients,
        instructions: receipe.instructions,
        completion_time: receipe.completion_time
      });
    await newDeletedReceipe.save();
    return res.send(receipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

// RESTORE a receipe from deleted receipes
router.delete('/deletedReceipes', async function (req, res, next) {
  try {
    const receipe = await deletedReceipes.findByIdAndDelete(req.body._id);
    if (!receipe) res.status(404).send("No receipe found");
    const newRestoredReceipe = new storedReceipes(
      {
        _id: uuid(),
        name: receipe.name,
        ingredients: receipe.ingredients,
        instructions: receipe.instructions,
        completion_time: receipe.completion_time
      });
    await newRestoredReceipe.save();
    return res.send(receipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

// EDIT a receipe from stored receipes
router.patch('/storedReceipes', async function (req, res, next) {
  try {
    const receipe = await storedReceipes.findByIdAndUpdate(req.body._id, req.body, {new: true});
    return res.send(receipe);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;

