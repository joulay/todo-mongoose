Create a Mongoose schema, a serialize method, and Model for Todos Tasks:

Create a file named models.js
Require in the necessary modules and create a Mongoose Schema with the following fields
title is type String
completed is type Boolean and defaults to false
Create a method name serialize on the schema's .methods property. The function returns an object using the documents values:
The _id is returned as id
The title and completed properties are returned with the same name.
Create a model named Todo for the todos collection and pass in the schema
Finally, export the new model.
You have completed the task when all the unit tests pass and the client application works without any errors.