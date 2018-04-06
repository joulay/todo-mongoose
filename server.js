'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Todo = require('./models');
const { PORT, DATABASE_URL } = require('./config');

const app = express();
app.use(express.static('public'));


