const express = require('express');


const app = express();

app.get('/', (req, res) => {
    return Response.json({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Marcus Cavalcante'
    });
});


app.listen(3005);