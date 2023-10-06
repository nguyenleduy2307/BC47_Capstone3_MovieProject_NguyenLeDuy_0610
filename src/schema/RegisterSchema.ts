import { z } from 'zod'

export const RegisterSchema = z.object({
    taiKhoan: z
        .string()
        .nonempty('Vui lòng nhập tài khoản')
        .min(6, 'Nhập tối thiểu 6 ký tự')
        .max(10, 'Nhập tối đa 10 ký tự'),

    matKhau: z.string().nonempty('Vui lòng nhập mật khẩu'),

    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),

    soDt: z.string().nonempty('Vui lòng nhập số điện thoại'),

    // Nếu muốn kiểm tra regex => chấm regex phía sau giống email

    maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),

    hoTen: z.string().nonempty('Vui lòng nhập họ tên'),

})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>