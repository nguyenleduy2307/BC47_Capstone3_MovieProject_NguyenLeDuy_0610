import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanDatVeServices } from "services";


export const getMaLichChieuThunk = createAsyncThunk(
    'quanLyDatVe/getLichChieu',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanDatVeServices.getLichChieu(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)