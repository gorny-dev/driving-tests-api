const express = require('express');
const apiRouter = require('./routes')

const app = express();

app.use(express.json());
app.use('/api/questions', apiRouter)

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on ${process.env.PORT || 8080}`);
});
