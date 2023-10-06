import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";


export const getHeThongRapThunk = createAsyncThunk(
    'quanLyRap/getHeThongRap',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getHeThongRapList()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getCumRapThunk = createAsyncThunk(
    'quanLyRap/getCumRap',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (payload: any, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getCumRapList(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getLichChieuThunk = createAsyncThunk(
    'quanLyRap/getLichChieu',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (payload: any, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getLichChieu(payload,'GP08')
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const getLichChieuPhimThunk = createAsyncThunk(
    'quanLyRap/getLichChieuPhim',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getLichChieuPhim(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)