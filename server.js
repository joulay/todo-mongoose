'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Todo = require('./models');
const { PORT, DATABASE_URL } = require('./config');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/v1/todos', (req, res, next) => {
  Todo.find()
    .then(todos => res.json(todos.map(todo => todo.serialize())))
    .catch(next);
});



