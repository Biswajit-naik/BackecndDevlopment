const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount routes
app.use('/', productRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
