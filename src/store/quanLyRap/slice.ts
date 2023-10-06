import { createSlice } from "@reduxjs/toolkit";
import { CumRap, HeThongRap, LichChieu, LichChieuPhim } from "type";
import { getCumRapThunk, getHeThongRapThunk, getLichChieuPhimThunk, getLichChieuThunk } from ".";



type QuanLyRapInitialState = {
   heThongRap?: HeThongRap[]
   cumRap?: CumRap[]
   lichChieu?: LichChieu[]
   lichChieuPhim?: LichChieuPhim
}

const initialState: QuanLyRapInitialState = {}

const quanLyRapSlice = createSlice({
    name: 'quanLyRap',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getHeThongRapThunk.fulfilled, (state, {payload}) => {
            state.heThongRap = payload
        })

        .addCase(getCumRapThunk.fulfilled, (state, {payload}) => {
            state.cumRap = payload
        })

        .addCase(getLichChieuThunk.fulfilled, (state, {payload}) => {
            state.lichChieu = payload
        })

        .addCase(getLichChieuPhimThunk.fulfilled, (state, {payload}) => {
            state.lichChieuPhim = payload
        })
    },

})

export const {actions: quanLyRapActions, reducer: quanLyRapReducer} = quanLyRapSlice