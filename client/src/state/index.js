import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "dark"
};


export const globalSlice = createSlice({
    name: "global",
    inicialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;