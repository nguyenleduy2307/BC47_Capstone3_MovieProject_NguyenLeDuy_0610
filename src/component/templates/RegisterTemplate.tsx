
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from 'component'
import { PATH } from 'constant'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RegisterSchema, RegisterSchemaType } from 'schema'
import { quanLyNguoiDungServices } from 'services'
import { handleError } from 'utils'

export const RegisterTemplate = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    console.log({ values })

    try {
      await quanLyNguoiDungServices.register(values)

      toast.success('Đăng ký thành công')

      // redirect về trang login

      navigate(PATH.login)


    } catch (err) {
      // console.log(err)
      // toast.error(err?.response?.data?.content)

      handleError(err)
    }

  }

  console.log("errors: ", errors);




  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      
      <h2 className="font-600 text-30">Đăng ký</h2>

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

      <Input
        lable='Họ tên'
        id='hoTen'
        name='hoTen'
        placeholder='Họ tên'
        register={register}
        error={errors?.hoTen?.message}
        className='mt-16'
      />

      <Input
        lable='Số điện thoại'
        id='soDt'
        name='soDt'
        placeholder='Số điện thoại'
        register={register}
        error={errors?.soDt?.message}
        className='mt-16'
      />

      <Input
        lable='Email'
        id='email'
        name='email'
        placeholder= 'Email'
        register={register}
        error={errors?.email?.message}
        className='mt-16'
      />

      <Input
        lable='Mã nhóm'
        id='maNhom'
        name='maNhom'
        placeholder='Mã nhóm'
        register={register}
        error={errors?.maNhom?.message}
        className='mt-16'
      />

      {/* <div className="mt-16">
        <label htmlFor="taiKhoan">
          Tài khoản
        </label>
        <input
          id="taiKhoan"
          type="text"
          placeholder="Tài khoản"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"

          // {...register('taiKhoan', {
          //   required: 'Vui lòng nhập tài khoản',
          //   maxLength: {
          //     value: 10,
          //     message: 'Nhập tối đa 10 ký tự',
          //   },
          //   minLength: {
          //     value: 5,
          //     message: 'Nhập tối thiểu 5 ký tự',
          //   },
          //   // partern
          // })}

          {
            ...register('taiKhoan')
          }
        />
        {
          errors?.taiKhoan &&
          (<p className='text-red-500 text-14'>{errors?.taiKhoan.message}</p>)
        }
      </div>

      <div className="mt-16">
        <label htmlFor="matKhau">
          Mật khẩu
        </label>
        <input
          id="matKhau"
          type="password"
          placeholder="Mật khẩu"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"
          {...register('matKhau')}
        />
        {
          errors?.matKhau &&
          (<p className='text-red-500 text-14'>{errors?.matKhau.message}</p>)
        }
      </div>

      <div className="mt-16">
        <label htmlFor="hoTen">
          Họ tên
        </label>
        <input
          id="hoTen"
          type="text"
          placeholder="Họ tên"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"
          {...register('hoTen')}
        />
        {
          errors?.hoTen &&
          (<p className='text-red-500 text-14'>{errors?.hoTen.message}</p>)
        }
      </div>

      <div className="mt-16">
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"
          {...register('email')}
        />
        {
          errors?.email &&
          (<p className='text-red-500 text-14'>{errors?.email.message}</p>)
        }
      </div>

      <div className="mt-16">
        <label htmlFor="soDt">
          Số điện thoại
        </label>
        <input
          id="soDt"
          type="text"
          placeholder="Số điện thoại"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"
          {...register('soDt')}
        />
        {
          errors?.soDt &&
          (<p className='text-red-500 text-14'>{errors?.soDt.message}</p>)
        }
      </div>

      <div className="mt-16">
        <label htmlFor="maNhom">
          Mã nhóm
        </label>
        <input
          id="maNhom"
          type="text"
          placeholder="Mã nhóm"
          className="p-10 mt-8 w-full rounded-6 bg-[#333]"
          {...register('maNhom')}
        />
        {
          errors?.maNhom &&
          (<p className='text-red-500 text-14'>{errors?.maNhom.message}</p>)
        }
      </div> */}

      <button className="w-full p-16 bg-red-500 text-white mt-20 rounded-10">Đăng ký</button>

    </form>
  )
}
