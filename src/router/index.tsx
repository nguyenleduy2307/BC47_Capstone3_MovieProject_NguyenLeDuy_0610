import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "component";
import { Account, Booking, Home, Login, MovieDetail, Register } from "pages";

export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: PATH.account,
                element: <Account/>
            },
            {
                path: PATH.movieDetail,
                element: <MovieDetail/>
            },
            {
                path: PATH.booking,
                element: <Booking/>
            }
        ]
    },

    {
        element: <AuthLayout/>,
        children: [
            {
                path: PATH.login,
                element: <Login/>
            },
            {
                path: PATH.register,
                element: <Register/>
            }
        ]
    }
]