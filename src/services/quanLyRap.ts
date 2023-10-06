import { apiInstance } from "constant";
import { CumRap, HeThongRap, LichChieu, LichChieuPhim } from "type";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP_API
})

export const quanLyRapServices = {
    getHeThongRapList: () => api.get<ApiResponse<HeThongRap[]>>('/LayThongTinHeThongRap'),
    getCumRapList: (query = '') => api.get<ApiResponse<CumRap[]>>(`/LayThongTinCumRapTheoHeThong?maHeThongRap=${query}`),
    getLichChieu: (query1 = '', query2 = '') => api.get<ApiResponse<LichChieu[]>>(`/LayThongTinLichChieuHeThongRap?maHeThongRap=${query1}&maNhom=${query2}`),
    getLichChieuPhim: (query = '') => api.get<ApiResponse<LichChieuPhim>>(`/LayThongTinLichChieuPhim?MaPhim=${query}`),
}

