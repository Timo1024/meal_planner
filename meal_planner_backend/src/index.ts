import express from 'express';
import mysql from 'mysql2';
import recipesRouter from './routes/recipes';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'meal_planner'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Use routes
app.use('/api', recipesRouter);

app.get('/', (req, res) => {
  res.send('Meal Planner Backend');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
