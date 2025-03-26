const express = require('express');

const app = express();

const port = 2000;

//datos hardcoded
let alumnos = [
    { id: 1, nombre: 'Juan Mata', matricula: 'A2034'},
    { id: 2, nombre: 'Jasias Sabreta', matricula: 'A5467'},
    { id: 3, nombre: 'Edirecto Aspenal', matricula: 'A5690'},
    { id: 4, nombre: 'Ezequie To', matricula: 'A2456'},
]; 

let profesores = [
    {id: 1, nombre: 'Mate Disruptiva', numeroEmpleado: 5454},
    {id: 2, nombre: 'Imp Ulso', numeroEmpleado: 4332},
    {id: 3, nombre: 'Zacate Tieso', numeroEmpleado: 2165},
    {id: 4, nombre: 'Jonans Brothers', numeroEmpleado: 5489},
];

//Endpoint para obtener lista alumnos

app.get('/pupilos', (req, res) => {
    res.json(alumnos);
});

//Endpoint para la lista de maestros

app.get('/eruditos', (req, res) => {
    res.json(profesores);
});

//Iniciar el server

app.listen(port, () => {
    console.log(`Listen in http://localhost: ${port}`);
});