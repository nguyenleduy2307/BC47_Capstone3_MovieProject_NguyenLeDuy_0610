
import { Button, Card, Skeleton, Carousel, Tabs, CumRapTemplate, } from "component"
import { PATH } from "constant"
// import { useQueryUrl } from "hooks"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { getBannerThunk, getMovieListThunk } from "store/quanLyPhim"
import { getCumRapThunk, getHeThongRapThunk } from "store/quanLyRap"


export const HomeTemplate = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { movieList, bannerMovie, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

  const { heThongRap } = useSelector((state: RootState) => state.quanLyRap)

  // const { cumRap } = useSelector((state: RootState) => state.quanLyRap)
  // console.log("cumRap: ", cumRap);


  useEffect(() => {
    dispatch(getMovieListThunk())
  }, [dispatch])

  useEffect(() => {
    dispatch(getBannerThunk())
  }, [dispatch])

  useEffect(() => {
    dispatch(getHeThongRapThunk())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getCumRapThunk("BHDStart"))
  // }, [dispatch])


  // Xử lý loading:

  if (isFetchingMovieList) {
    return <div className="grid grid-cols-4">
      {
        // Tạo mảng ảo để map
        [...Array(12)].map(() => {
          return (
            <Card className="!w-[300px] !mt-20">
              <Skeleton.Image className="!w-full !h-[250px]" />
              <Skeleton.Input className="!w-full mt-16]" />
              <Skeleton.Input className="!w-full mt-16]" />
            </Card>
          )
        })
      }
    </div>
  }

  // Tạo state để lấy giá trị input trong ô:
  // const [inputValue, setInputValue] = useState()

  // Tạo queryParam:

  // const [queryParams] = useQueryUrl()

  // console.log("queryParams: ", queryParams);

  // 



  return (
    <div>


      {/* CAROUSEL */}
      <div className="mb-[64px]">
        <Carousel
          autoplay
          dotPosition="bottom"

        >
          {bannerMovie?.map((banner) => (
            <div>
              <img className="!w-full !h-[600px]" src={banner.hinhAnh} alt="" />
            </div>
          )
          )}
        </Carousel>
      </div>


      {/* DANH SÁCH PHIM */}
      <div className="grid grid-cols-4 mb-[64px]">
        {movieList?.map((movie) => (
          <Card
            key={movie.maPhim}
            className="!mt-20"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={movie.hinhAnh} className="!w-full !h-[350px]" />}
          >
            <Card.Meta
              className="!p-8"
              title={movie.tenPhim}
            />

            <div className="grid grid-cols-2">

              <Button
                className='!h-[36px] mt-12 me-2'
                type='link'
                onClick={() => {
                  const path = generatePath(PATH.movieDetail, { maPhim: movie.maPhim })
                  navigate(path)
                }}
              >
                <i className="fa-solid fa-info"></i>
                <span className="font-500 ms-8">CHI TIẾT</span>
              </Button>

              <Button
                className='!h-[36px] mt-12'
                type='primary'
                onClick={() => {
                  const path = generatePath(PATH.movieDetail, { maPhim: movie.maPhim })
                  navigate(path)
                }}
              >
                <i className="fa-solid fa-blender-phone"></i>
                <span className="font-500 ms-8">MUA VÉ</span>
              </Button>

            </div>
          </Card>
        ))}
      </div>


      {/* DANH SÁCH RẠP */}
      <div>
        <Tabs
          tabPosition="left"
          items={heThongRap?.map((i) => {
            return {
              label: (
                <Button
                  className="!border-0 hover:first-letter:disabled"
                  onClick={() => {
                    dispatch(getCumRapThunk(i.maHeThongRap))
                  }}
                >
                  <span className="w-full items-center inline-flex flex-grow">
                    <div className="w-[80px] h-[80px]">
                      <img
                        src={i.logo}
                        alt="..."
                        className="w-full h-full object-cover text-center" />
                    </div>
                  </span>

                </Button>
              ),
              key: i.maHeThongRap,
              children: <CumRapTemplate maHT={i.maHeThongRap} />
            }
          })}
        />

      </div>

    </div>
  )
}
