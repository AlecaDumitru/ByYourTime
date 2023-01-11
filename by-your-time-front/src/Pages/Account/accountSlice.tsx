import { User } from "../../models/user";
// import * as toolkitRaw from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// = ((toolkitRaw as any).default ??
//   toolkitRaw) as typeof toolkitRaw;

interface AccountState{
    user: User | null;
}

const initialState: AccountState = {
user: null
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {}
})