import { Router } from 'express';

const router = Router();

router.post('/recipes', (req, res) => {
  const { name, ingredients } = req.body;
  // Handle adding recipe to the database
  res.status(201).send({ message: 'Recipe added successfully' });
});

export default router;
