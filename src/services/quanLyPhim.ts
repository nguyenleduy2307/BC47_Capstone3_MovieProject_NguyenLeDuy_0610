import { apiInstance } from "constant";
import { Banner, Movie } from "type/QuanLyPhim";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API
})

export const quanLyPhimServices = {
    getMovieList: (query = '') => api.get<ApiResponse<Movie[]>>(`/LayDanhSachPhim${query}`),
    getBanner: () => api.get<ApiResponse<Banner[]>>('/LayDanhSachBanner')
}