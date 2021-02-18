# Routing

From our design section, our User routes will look like so:

| Operation      | Request Method | Request Body | Request Path      | Response Status | Response Body |
|----------------|----------------|--------------|-------------------|-----------------|---------------|
| Get Users      | GET            |              | /api/v1/users     | 200             | [User]        |
| Get User By ID | GET            |              | /api/v1/users/:id | 200             | User          |
| Create User    | POST           | User         | /api/v1/users     | 201             | User          |
| Update User    | PUT            | User         | /api/v1/users/:id | 200             | User          |
| Delete User    | DELETE         |              | /api/v1/users/:id | 204             |               |

Which we can represent using Express' DSL.

But first, let's import our User model into `app.js`:
```js
const express = require('express');
const { User } = require('./models');
const app = express();
```

Now we can add our routes for Users:
```js
app.get('/users', (req, res) => {
  const users = await User.find({});
  res.status(200).send(users)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = await User.findOneById(id);
  res.status(200).send(user)
})

app.post('/users', (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).send(newUser)
})

app.put('/users:id', (req, res) => {
  const id = req.params.id;
  const newUser = await User.findByIdAndUpdate(id, req.body);
  res.status(200).send(updatedUser)
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndRemove(id);
  res.status(204).send()
})
```