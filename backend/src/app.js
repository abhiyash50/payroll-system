const express = require('express');
const errorMiddleware = require('./middlewares/error.middleware');

const healthRoute = require('./routes/health.route');

const app = express();

app.use(express.json());

// Routes
app.use('/', healthRoute);

// Error handler (must be last)
app.use(errorMiddleware);

module.exports = app;
