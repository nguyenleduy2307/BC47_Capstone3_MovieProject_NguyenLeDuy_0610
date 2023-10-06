import { createSlice } from "@reduxjs/toolkit";
import { Banner, Movie } from "type/QuanLyPhim";
import { getBannerThunk, getMovieListThunk } from ".";

type QuanLyPhimInitialState = {
    movieList?: Movie[]
    isFetchingMovieList?: boolean
    bannerMovie?: Banner[]
}

const initialState: QuanLyPhimInitialState = {}

const quanLyPhimSlice = createSlice({
    name: 'quanLyPhim',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        
        .addCase(getMovieListThunk.pending, (state) => {
            state.isFetchingMovieList = true
        })

        .addCase(getMovieListThunk.fulfilled, (state, {payload}) => {
            state.movieList = payload
            state.isFetchingMovieList = false
        })

        .addCase(getMovieListThunk.rejected, (state) => {
            state.isFetchingMovieList = false
        })

        .addCase(getBannerThunk.fulfilled, (state, {payload}) => {
            state.bannerMovie = payload
        })
    },

})

export const {actions: quanLyPhimActions, reducer: quanLyPhimReducer} = quanLyPhimSlice