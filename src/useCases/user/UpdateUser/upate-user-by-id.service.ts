import { User } from '@/entities/user.entity'
import { UserRepositoryInterface } from '@/repositories/user-repository.interface'

export class UpdateUserUseCase {
  constructor (
    private readonly userRepository: UserRepositoryInterface) { }

  async execute (data: User) {
    const userSearched = await this.userRepository.findById(data.id)

    if (userSearched == null) {
      throw new Error('User not found')
    }
    await this.userRepository.update(data)
  }
}
