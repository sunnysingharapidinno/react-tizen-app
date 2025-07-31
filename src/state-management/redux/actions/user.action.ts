import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { IProfile } from "types/response/user.response"

export const setProfileDetail = createAsyncThunk(
  "users/profileDetail",
  async (payload: IProfile) => {
    return payload
  }
)

export const setProfileDetailLoading = createAction<boolean>(
  "users/profileDetailLoading"
)
