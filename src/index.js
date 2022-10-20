const app = require('express')();

app.get('/', (req, res) => {
    res.json('hello');
});

const port = process.env.PORT || 8888;

app.listen(port, () => console.log('app is running '+port));