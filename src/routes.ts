import { Router } from 'express'
import { loginController } from './useCases/user/Login/login.module'
import { createUserController } from './useCases/user/CreateUser/create-user.module'
import { deleteUserController } from './useCases/user/DeleteUserById/delete-user-by-id.module'
import { getUserController } from './useCases/user/GetUser/get-user.module'
import { getUserByEmailController } from './useCases/user/GetUserByEmail/get-user-by-email.module'
import { getUserByIdController } from './useCases/user/GetUserById/get-user-by-id.module'
import { updateUserController } from './useCases/user/UpdateUser/update-user-by-id.module'

const router = Router()

/* CRUD User */

router.post('/user', async (request, response) => {
  return await createUserController.handle(request, response)
})

router.get('/user', async (request, response) => {
  return await getUserController.handle(request, response)
})

router.get('/user-by-email', async (request, response) => {
  return await getUserByEmailController.handle(request, response)
})

router.get('/user/:id', async (request, response) => {
  return await getUserByIdController.handle(request, response)
})

router.put('/user/:id', async (request, response) => {
  return await updateUserController.handle(request, response)
})

router.delete('/user/:id', async (request, response) => {
  return await deleteUserController.handler(request, response)
})

/* Auth User */

router.post('/user/auth', async (request, response) => {
  return await loginController.handle(request, response)
})

export { router }
