import { Request, Response } from 'express'
import { LoginDTO } from './login.dto'
import { LoginUseCase } from './login.service'
import { resultServiceDTO } from '@/@types/generic'

export class LoginController {
  constructor (
    private readonly LoginUseCase: LoginUseCase) { }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const result: resultServiceDTO = await this.LoginUseCase.execute(request.body as LoginDTO)
      return response.status(result.code).json(result)
    } catch (error) {
      return response.status(400).json({
        error: 'Unexpected error'
      })
    }
  }
}
