import { createSlice } from "@reduxjs/toolkit"

import { IComment } from "./../../models/Comment/IComment"

const initialState: { comments: IComment[] | undefined } = {
  comments: undefined,
}

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    
  },
})
