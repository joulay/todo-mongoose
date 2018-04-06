'use strict';

exports.PORT = process.env.PORT || 8080;

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/todo-mongoose';


exports.TEST_MONGODB_URI = process.env.TEST_MONGODB_URI || 'mongodb://localhost/todo-mongoose-test';