const express = require('express');

const routes = express.Router();

const Paciente = require('./controllers/paciente');

routes.get('/', (req, res)=>{
    res.send('API Clinica Respondendo!')
});

routes.post('/pacientes', Paciente.create)
routes.get('/pacientes', Paciente.read)
routes.put('/pacientes/:id', Paciente.update)
routes.delete('/pacientes/:id', Paciente.del)

module.exports = routes;