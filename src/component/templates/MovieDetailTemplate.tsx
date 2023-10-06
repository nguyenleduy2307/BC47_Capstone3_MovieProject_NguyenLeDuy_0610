/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { useEffect, useRef } from "react"
import { getMovieListThunk } from "store/quanLyPhim";
import { Button, LichChieuTemplate, Tabs } from "component";
import { getLichChieuPhimThunk } from "store/quanLyRap";


export const MovieDetailTemplate = () => {

  // Lấy param của mã phim
  const param: { maPhim?: number } = useParams()

  const param2 = param.maPhim.toString()

  // Lấy movieList:
  const dispatch = useAppDispatch();

  const { movieList } = useSelector((state: RootState) => state.quanLyPhim);

  const { lichChieuPhim } = useSelector((state: RootState) => state.quanLyRap)

  useEffect(() => {
    dispatch(getMovieListThunk())
  }, [dispatch])

  useEffect(() => {
    dispatch(getLichChieuPhimThunk(param2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const movieDetail = movieList?.find((item) => item.maPhim === param.maPhim * 1)

  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>

      {/* Movie Detail */}
      <h2 className="font-700 text-30 border-b-2 border-black pb-8">Chi Tiết Phim</h2>

      <div className="grid grid-cols-5 pt-20">

        <div className="pe-20">
          <img src={movieDetail?.hinhAnh} alt="..." className="rounded-xl" />
        </div>

        <div className="col-span-2 pe-20">

          <h3 className="font-700 text-24 border-b-2 border-stone-400 pb-20 uppercase">{movieDetail?.tenPhim}</h3>

          <div className="text-18 pt-14">
            <span className="font-700">Ngày khởi chiếu: </span>
            <span>{movieDetail?.ngayKhoiChieu}</span>
          </div>

          <div className="text-18 pt-6">
            <span className="font-700">Đánh giá: </span>
            <span>{movieDetail?.danhGia}</span>
          </div>

          <div className="text-18 pt-6">
            <span className="font-700">Mô tả: </span>
            <span>{movieDetail?.moTa}</span>
          </div>

          <Button
            className='!h-[36px] mt-12'
            type='primary'
            onClick={handleClick}
          >
            <i className="fa-solid fa-blender-phone"></i>
            <span className="font-500 ms-8">MUA VÉ</span>
          </Button>

        </div>

        <div className="col-span-2 ps-24">

          <span className="font-700 text-18 p-8 bg-red-800 text-white">Trailer: </span>

          <iframe className="!w-full !h-[300px] pt-16" src={movieDetail?.trailer}></iframe>

        </div>

      </div>

      {/* Lịch chiếu */}

      <div ref={ref} className="px-[250px]" >

        <p className="mt-[100px] pb-[8px] mb-[24px] text-20 font-500 text-center border-b-2 border-gray-500">LỊCH CHIẾU PHIM</p>

        <Tabs
          tabPosition="left"
          items={lichChieuPhim?.heThongRapChieu?.map((i) => {
            return {
              label: (

                <span className="w-full items-center inline-flex flex-grow">
                  <div className="w-[80px] h-[80px]">
                    <img
                      src={i?.logo}
                      alt="..."
                      className="w-full h-full object-cover text-center" />
                  </div>
                </span>
              ),
              key: i?.maHeThongRap,
              children: <LichChieuTemplate maHTRap={i.maHeThongRap} />
            }
          })}
        />
      </div>




    </div>
  )
}
