const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send('Tudo Ok')
});


app.listen(3333);
console.log('Servidor Ativo. Porta 3333');

