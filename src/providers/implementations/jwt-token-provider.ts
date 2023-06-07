import { TokenProviderInterface } from '../token-provider.interface'
import jwt from 'jsonwebtoken'

export class JwtTokenProvider implements TokenProviderInterface {
  public async create (id: string): Promise<string> {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
  }
}
