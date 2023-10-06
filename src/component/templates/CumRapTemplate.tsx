
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { useEffect } from "react"
import { getCumRapThunk, getLichChieuThunk } from "store/quanLyRap"
import { Button, DanhSachPhimTemplate, Tabs } from "component"


export const CumRapTemplate = ({maHT}) => {

    const dispatch = useAppDispatch()

    const {cumRap} = useSelector((state: RootState) => state.quanLyRap)

    useEffect(() => {
        dispatch(getCumRapThunk("BHDStar"))
    }, [dispatch])

    return (
        <div>
            <Tabs
                tabPosition="left"
                items={cumRap?.slice(0, 6).map((i) => {
                    return {
                        label: (
                            <Button
                                className="!border-0 hover:first-letter:disabled !w-[400px] !h-[90px] !text-left !pe-24"
                                onClick={() => {
                                    dispatch(getLichChieuThunk(maHT))
                                }}
                            >
                                <div>
                                    <p className="uppercase text-20 font-500 text-green-700">{i.tenCumRap.substring(0, 30)}...</p>
                                    <p className="uppercase text-16 font-300 text-gray-600">{i.diaChi.substring(0, 35)}...</p>
                                    <p className="text-16 font-300 text-blue-800">[chi tiết]</p>
                                </div>
                            </Button>
                        ),
                        key: i.maCumRap,
                        // children: <p></p>
                        children: <DanhSachPhimTemplate maCumRapaa={i.maCumRap} maHeThongaa={maHT}/>
                    }
                })}
            />
        </div>
    )
}
