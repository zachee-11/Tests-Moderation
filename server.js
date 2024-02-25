const express = require('express');
const app = express();
const PORT = 3000;
const moderationRoutes = require('./routes/ModerationRoute');

app.use(express.json());
app.use('/api/moderation', moderationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
