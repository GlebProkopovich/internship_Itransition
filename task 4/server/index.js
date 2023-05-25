const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./authRouter');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
