//entry point to our backend

const express = require('express'); //express imported  {COMMON JS}
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) =>
  res.json({
    msg: 'Contact App API',
  })
);

//user req body in routes
app.use(express.json({ extended: false }));

//Defining routes

app.use('/api/users', require('./routes/users'));
app.use('/api/contact', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
