# Routing

### Earthquakes

From our design section, our Earthquake route will look like:

| Operation       | Request Method | Request Path                 | Response Status | Response Body |
|-----------------|----------------|------------------------------|-----------------|---------------|
| Get Earthquakes | GET            | `/api/<version>/earthquakes` | 200             | [Earthquake]  |

Which we can represent using Express' DSL...
Let's import our models into `app.js` and tell express to use JSON:
```js
const express = require('express');
// Add models
const { User, Earthquake } = require('./models');
const app = express();
// Use JSON
app.use(express.json());
```

Now we can craft our earthquakes endpoint like so:
```js
app.get('/earthquakes', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const find = {}
  const earthquakes = await Earthquake.find(find).limit(limit).skip(skip);
  res.status(200).send(earthquakes);
});
```

### Users

We can define our routes for Users:
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