const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;



const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`server listening at PORT:${PORT}`)
})