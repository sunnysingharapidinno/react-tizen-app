import { IProfile } from "types/response/user.response.type"

export interface IUserState {
  profileDetail: IProfile | null
  loading: boolean
  notificationCount: number
}
