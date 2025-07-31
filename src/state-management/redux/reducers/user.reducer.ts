import { createReducer } from "@reduxjs/toolkit"

import { IUserState } from "types/reducer/user.reducer.type"
import {
  setProfileDetail,
  setProfileDetailLoading,
} from "../actions/user.action"

export const initialState: IUserState = {
  profileDetail: null,
  loading: false,
  notificationCount: 0,
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setProfileDetailLoading, (state) => {
      state.loading = true
    })
    .addMatcher(
      (action) => setProfileDetail.fulfilled.match(action),
      (state, action) => {
        state.profileDetail = action.payload
        state.loading = false
      }
    )
})

export default userReducer
