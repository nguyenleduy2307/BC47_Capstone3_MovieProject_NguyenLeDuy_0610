import { Button } from "component"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { getMaLichChieuThunk } from "store/quanLyDatVe"

export const BookingTemplate = () => {

    const param: { maLichChieu?: number } = useParams()

    const param2 = param.maLichChieu?.toString()

    const dispatch = useAppDispatch()

    const { maLichChieu } = useSelector((state: RootState) => state.quanLyDatVe)

    useEffect(() => {
        dispatch(getMaLichChieuThunk(param2))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="text-center p-12 font-400 text-20 text-white bg-slate-700">Màn hình</p>

                <div className="grid grid-cols-10 gap-20 px-[60px] pt-16">

                    {maLichChieu?.danhSachGhe?.map((item) => (
                        <div
                            className="cursor-pointer text-20 font-500 text-center p-6 border-2 rounded-6 bg-gray-300 text-gray-700 hover:bg-white"
                        >{item.tenGhe}</div>
                    ))}

                </div>
            </div>
            <div className="border-4 border-indigo-500 rounded-6 ms-16 p-8">
                <p className="uppercase text-24 font-600 text-center mb-8">Thông tin đặt vé</p>
                <div className="text-20 font-400 mb-8">
                    <span>Tên Phim: </span>
                    <span className="text-blue-700">{maLichChieu?.thongTinPhim?.tenPhim}</span>
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Hình ảnh:</span>
                    <img className="w-[50%]" src={maLichChieu?.thongTinPhim?.hinhAnh} alt="..." />
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Cụm rạp: </span>
                    <span className="text-blue-700">{maLichChieu?.thongTinPhim?.tenCumRap}</span>
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Địa chỉ: </span>
                    <span className="text-blue-700">{maLichChieu?.thongTinPhim?.diaChi}</span>
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Rạp: </span>
                    <span className="text-blue-700">{maLichChieu?.thongTinPhim?.tenRap}</span>
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Ngày giờ chiếu: </span>
                    <span className="text-blue-700">{maLichChieu?.thongTinPhim?.ngayChieu}</span>
                </div>
                <div className="text-20 font-400 mb-8">
                    <span>Ghế đã chọn: </span>
                    <span className="text-red-700 font-700 text-24">12, 15</span>
                </div>
                <div className="text-[28px] font-400 mt-20 text-center text-blue-900">
                    <span>TỔNG: </span>
                    <span>200,000 VND</span>
                </div>

                <div className="text-center">
                    <Button
                        className='!h-[48px] mt-12 !text-[24px]'
                        type='primary'
                    >Thanh Toán</Button>
                </div>

            </div>
        </div>
    )
}
