const express = require('express');
const router = require('./routes')

const app = express();


app.use(express.json());
app.use('/api/questions', router)

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on ${process.env.PORT || 8080}`);
});
