import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
    'quanLyPhim/getMovieList',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getMovieList('?maNhom=GP08')
            await sleep(1000)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getBannerThunk = createAsyncThunk(
    'quanLyPhim/getBanner',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getBanner()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)