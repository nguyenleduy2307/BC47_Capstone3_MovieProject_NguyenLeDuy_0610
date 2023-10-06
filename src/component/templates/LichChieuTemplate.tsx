/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react"

import { getLichChieuPhimThunk } from "store/quanLyRap";
import { PATH } from "constant";

export const LichChieuTemplate = ({ maHTRap }) => {

    const navigate = useNavigate()

    // Lấy param của mã phim
    const param: { maPhim?: number } = useParams()
    const param2 = param.maPhim.toString()

    // Lấy movieList:
    const dispatch = useAppDispatch();

    const { lichChieuPhim } = useSelector((state: RootState) => state.quanLyRap)

    const cumRap = lichChieuPhim?.heThongRapChieu?.find((i) => i?.maHeThongRap === maHTRap)

    console.log("cumRap: ", cumRap);

    useEffect(() => {
        dispatch(getLichChieuPhimThunk(param2))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    return (
        <div>
            {cumRap?.cumRapChieu?.map((item) =>
            (
                <div className="mb-24">
                    <p className="text-20 font-500 text-green-700">{item.tenCumRap}</p>
                    <div className="mt-12 grid grid-cols-3 gap-20">
                        {
                            item?.lichChieuPhim?.map((item2) => (
                                <span
                                    className="p-8 border-solid border-2 border-indigo-300 rounded-6 cursor-pointer hover:bg-violet-400"
                                    onClick={() => {
                                        const path = generatePath(PATH.booking, {maLichChieu: item2.maLichChieu})
                                        navigate(path)
                                      }}
                                >
                                    {item2.ngayChieuGioChieu}
                                </span>
                            ))
                        }
                    </div>

                </div>
            ))
            }
        </div>
    )
}
