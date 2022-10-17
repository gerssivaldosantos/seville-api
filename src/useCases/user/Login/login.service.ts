import { LoginDTO } from './login.dto'
import bcrypt from 'bcryptjs'
import { TokenProviderInterface } from '@/providers/token-provider.interface'
import { UserRepositoryInterface } from '@/repositories/user-repository.interface'
import { User } from '@/entities/user.entity'
import { resultServiceDTO, IUseCase } from '@/@types/generic'

export class LoginUseCase implements IUseCase {
  constructor (
    private readonly UserRepository: UserRepositoryInterface,
    private readonly TokenProvider: TokenProviderInterface
  ) { }

  async execute (login: LoginDTO): Promise<resultServiceDTO> {
    try {
      const userSearched = await this.UserRepository.customFindByEmail(login.email)
      if (!(userSearched instanceof User)) {
        return {
          code: 404,
          message: 'User not Found'
        }
      }
      const passwordValid = await bcrypt.compare(login.password, userSearched.password)
      if (!passwordValid) {
        return {
          code: 401,
          message: 'Credentials not valid'
        }
      }
      const token = await this.TokenProvider.create(userSearched.id as string)
      const { password, ...user } = userSearched
      return {
        code: 201,
        message: '',
        content: {
          token,
          user
        }
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
