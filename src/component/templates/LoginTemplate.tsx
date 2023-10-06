import { zodResolver } from "@hookform/resolvers/zod"

import { Input, Button } from "component"
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginSchema, LoginSchemaType } from "schema"
import { RootState, useAppDispatch } from "store"
import { loginThunk } from "store/quanLyNguoiDung"
import { toast } from 'react-toastify'
import { handleError } from "utils"


export const LoginTemplate = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema)
  })

  // Sử dụng useAppDispatch thay cho useDispatch:
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const { isFetchingLogin } = useSelector((state: RootState) => state.quanLyNguoiDung)

  const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {


    dispatch(loginThunk(value))
      // sử dụng action Thunk nên cần unwrap
      .unwrap()
      .then(() => {
        // Xử lý thành công:
        toast.success('Đăng nhập thành công')

        // Đăng nhập thành công, navigate về trang Home
        navigate('/')
      })
      .catch((err) => {
        // Xử lý thất bại:
        handleError(err)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-600 text-30 text-white">Đăng nhập</h2>

      <Input
        lable='Tài khoản'
        id='taiKhoan'
        name='taiKhoan'
        placeholder='Tài khoản'
        register={register}
        error={errors?.taiKhoan?.message}
        className='mt-16'
      />

      <Input
        lable='Mật khẩu'
        id='matKhau'
        name='matKhau'
        placeholder='Mật khẩu'
        register={register}
        error={errors?.matKhau?.message}
        className='mt-16'
        type='password'
      />

      <Button
        className="!w-full !h-[48px] mt-20"
        htmlType="submit"
        type="primary"
        loading={isFetchingLogin}
      >Đăng nhập</Button>

    </form>
  )
}
