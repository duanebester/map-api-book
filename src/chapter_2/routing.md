# Routing

From our design section, our User routes will look like so:

| Operation      | Request Method | Request Body | Request Path      | Response Status | Response Body |
|----------------|----------------|--------------|-------------------|-----------------|---------------|
| Get Users      | GET            |              | /api/v1/users     | 200             | [User]        |
| Get User By ID | GET            |              | /api/v1/users/:id | 200             | User          |
| Create User    | POST           | User         | /api/v1/users     | 201             | User          |
| Update User    | PUT            | User         | /api/v1/users/:id | 200             | User          |
| Delete User    | DELETE         |              | /api/v1/users/:id | 204             |               |

Which we can represent using Express' DSL:

```js
const userRouter = express.Router()

userRouter.get('/users', (req, res) => {
  // get users
  res.status(200).send(users)
})

userRouter.get('/users/:id', (req, res) => {
  // get user by id
  res.status(200).send(user)
})

userRouter.post('/users', (req, res) => {
  // create user
  res.status(201).send(newUser)
})

userRouter.put('/users', (req, res) => {
  // update user
  res.status(200).send(updatedUser)
})

userRouter.delete('/users/:id', async (req, res) => {
  // delete user by id
  res.status(204).send()
})
```