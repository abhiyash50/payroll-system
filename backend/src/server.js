const app = require('./app');
const connectDB = require('./config/db');
const { port } = require('./config/env');

const startServer = async () => {
  await connectDB();

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
};

startServer();
