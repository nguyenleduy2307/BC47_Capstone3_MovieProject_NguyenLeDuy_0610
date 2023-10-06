import { apiInstance } from "constant";
import { maLichChieu } from "type";



const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API
})

export const quanDatVeServices = {
    getLichChieu: (query = '') => api.get<ApiResponse<maLichChieu>>(`/LayDanhSachPhongVe?MaLichChieu=${query}`),
}
