import { IUserState } from "./user.reducer.type"
import type { Reducer } from "redux"
type ReducerWithInitialState<S> = Reducer<S> & {
  getInitialState: () => S
}

export interface IRootReducer {
  user: ReducerWithInitialState<IUserState>
}
