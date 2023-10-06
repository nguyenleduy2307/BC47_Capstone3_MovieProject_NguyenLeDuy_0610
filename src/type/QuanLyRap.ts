
export type HeThongRap = {
    "maHeThongRap": string
    "tenHeThongRap": string
    "biDanh": string
    "logo": string
}

export type CumRap = {
    "maCumRap": string
    "tenCumRap": string
    "diaChi": string
    "danhSachRap": {
        "maRap": number
        "tenRap": string
    } []
}

export type LichChieu = {
    "lstCumRap": {
        "danhSachPhim": {
            "lstLichChieuTheoPhim": {
                "maLichChieu": number
                "maRap": string
                "tenRap": string
                "ngayChieuGioChieu": string
                "giaVe": number
                } []
            "maPhim": number
            "tenPhim": string
            "hinhAnh": string
            "hot": boolean
            "dangChieu": boolean
            "sapChieu": boolean  
        } []
        "maCumRap": string
        "tenCumRap": string
        "hinhAnh": string
        "diaChi": string
    } []
    "maHeThongRap": string
    "tenHeThongRap": string
    "logo": string
    "mahom": string
}

export type LichChieuPhim = {
    "heThongRapChieu": {
        "cumRapChieu": {
            "lichChieuPhim": {
                "maLichChieu": string
                "maRap": string
                "tenRap": string
                "ngayChieuGioChieu": string
                "giaVe": number
                "thoiLuong": number
            }[]
            "maCumRap": string
            "tenCumRap": string
            "hinhAnh": string
            "diaChi": string
        }[]
        "maHeThongRap": string
        "tenHeThongRap": string
        "logo": string
    }[]
    "maPhim": number
    "tenPhim": string
    "biDanh": string
    "trailer": string
    "hinhAnh": string
    "moTa": string
    "maNhom": string
    "hot": string
    "dangChieu": string
    "sapChieu": string
    "ngayKhoiChieu": string
    "danhGia": string
}