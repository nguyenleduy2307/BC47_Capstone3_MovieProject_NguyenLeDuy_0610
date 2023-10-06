import {z} from 'zod'

export const AccountSchema = z.object({
    taiKhoan: z.string().nonempty('Vui lòng nhập tài khoản'),
    hoTen: z.string().nonempty('Vui lòng nhập họ tên'),
    email: z.string().nonempty('Vui lòng nhập email'),
    soDt: z.string().nonempty('Vui lòng nhập số điện thoại'),
    maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),
    maNguoiLoaiDung: z.string().nonempty('Vui lòng nhập mã loại người dùng'),
})

export type AccountSchemaType = z.infer<typeof AccountSchema>