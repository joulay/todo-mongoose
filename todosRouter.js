'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Todo = require ('./models');

// router.get('/v1/todos')