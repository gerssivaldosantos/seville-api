import { User } from '@/entities/user.entity'
import { UserRepositoryInterface } from '@/repositories/user-repository.interface'

export class GetUserByIdUseCase {
  constructor (private readonly userRepository: UserRepositoryInterface) {}

  async execute (id: string): Promise<User> {
    const user = await this.userRepository.findById(id)
    if (user == null) {
      throw new Error('User Not Found')
    }
    return user
  }
}
