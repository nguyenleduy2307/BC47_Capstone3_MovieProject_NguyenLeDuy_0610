// Type backend trả về:

export type userLogin = {
    taiKhoan: string
    hoTen: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    accessToken: string
}

export type UserByAccessToken = Omit<userLogin, 'accessToken'> & {
    thongTinDatVe?: []
    loaiNguoiDung: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    }
}

// Omit<userLogin, 'accessToken' | 'maNhom'> : nghĩa là kế thừa userLogin nhưng không có 'accessToken' và 'maNhom'