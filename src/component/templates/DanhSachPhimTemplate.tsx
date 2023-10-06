import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { useEffect } from "react"
import { getLichChieuThunk } from "store/quanLyRap"
import { generatePath, useNavigate } from "react-router-dom"
import { PATH } from "constant"

export const DanhSachPhimTemplate = ({ maCumRapaa, maHeThongaa }) => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const { lichChieu } = useSelector((state: RootState) => state.quanLyRap)

    const list2 = lichChieu?.find((item) => item.mahom === 'GP08')

    const listCR = list2?.lstCumRap?.find((item) => item?.maCumRap === maCumRapaa)

    useEffect(() => {
        dispatch(getLichChieuThunk(maHeThongaa))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div>
            {
                listCR?.danhSachPhim?.slice(0, 3).map((item) => (
                    <div className="grid grid-cols-3 mb-[36px]">
                        <div>
                            <img
                                src={item?.hinhAnh}
                                alt="..."
                                className="!w-full !h-full py-8 pe-16"
                            />
                        </div>
                        <div className="col-span-2">
                            <p className="text-24 font-500 text-gray-950 mb-8">{item?.tenPhim}</p>
                            <div className="grid grid-cols-2 gap-16">
                                {item?.lstLichChieuTheoPhim?.slice(0, 6).map((item2) => (
                                    <div className="p-8 border-solid border-2 border-indigo-300 rounded-6 cursor-pointer hover:bg-violet-400"
                                        onClick={() => {
                                            const path = generatePath(PATH.booking, { maLichChieu: item2.maLichChieu })
                                            navigate(path)
                                        }}
                                    >
                                        {item2?.ngayChieuGioChieu}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
