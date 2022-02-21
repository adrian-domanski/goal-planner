const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5001;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

// Overrides express default error output to json
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
