import { apiInstance } from "constant"
import { LoginSchemaType, RegisterSchemaType } from "schema"
import { UserByAccessToken, userLogin } from "type"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),
    
    login: (data: LoginSchemaType) => api.post<ApiResponse<userLogin>>('/DangNhap', data),

    getUserByAccessToken: () => api.post<ApiResponse<UserByAccessToken>>('/ThongTinTaiKhoan'),
}