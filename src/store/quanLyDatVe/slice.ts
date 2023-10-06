import { createSlice } from "@reduxjs/toolkit";
import { maLichChieu } from "type";
import { getMaLichChieuThunk } from ".";


type QuanLyDatVeInitialState = {
   maLichChieu?: maLichChieu
}
const initialState: QuanLyDatVeInitialState = {}

const quanLyDatVeSlice = createSlice({
    name: 'quanLyDatVe',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getMaLichChieuThunk.fulfilled, (state, {payload}) => {
            state.maLichChieu = payload
        })

    },

})

export const {actions: quanLyDatVeActions, reducer: quanLyDatVeReducer} = quanLyDatVeSlice