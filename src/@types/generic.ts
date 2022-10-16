export interface resultServiceDTO {
  code: number
  message?: string
  content?: unknown
}

export interface IUseCase {
  execute: (arg: any) => Promise<resultServiceDTO>
}
