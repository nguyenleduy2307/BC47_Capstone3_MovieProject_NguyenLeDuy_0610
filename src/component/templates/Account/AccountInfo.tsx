import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "component"
import { useAuth } from "hooks"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AccountSchema, AccountSchemaType } from "schema/AccountSchema"
// import styled from "styled-components"

export const AccountInfo = () => {

    const {user} = useAuth()

    const {
        reset,
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode:"onChange"
    })

    const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
        console.log("value: ", value);
        // Gọi API:

        // Cần dispatch action getAccessToken để call API lấy lại thông tin up thông tin tài khoản
    }

    // Xử lý soDT # soDt:
    useEffect(() => {
        reset(
            {
                ...user,
                soDt: user?.soDT
            }
        )
    }, [user, reset])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Tài khoản"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Họ và tên"
                name="hoTen"
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Email"
                name="email"
                register={register}
            />

            <Input
                className="[&>lable]:text-red [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Số điện thoại"
                name="soDT"
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Mã nhóm"
                name="maNhom"
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black "
                lable="Mã loại người dùng"

                name="maLoaiNguoiDung"
                register={register}
            />

            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]" >
                    Hoàn thành chỉnh sửa
                </Button>
            </div>


        </form>
    )
}

// const InputS = styled(Input)`
//     lable {
//         color: #111;
//     }
// `
