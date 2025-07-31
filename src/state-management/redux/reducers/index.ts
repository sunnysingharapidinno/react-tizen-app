import { IRootReducer } from "types/reducer/root.reducer.type"
import userReducer from "./user.reducer"

const rootReducer: IRootReducer = {
  user: userReducer,
}

export default rootReducer
