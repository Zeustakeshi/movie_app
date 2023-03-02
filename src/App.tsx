import "swiper/scss";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainDesktop from "./components/layout/desktop/Main";
import MainMobile from "./components/layout/mobile/MainMobile";
import { useAppContext } from "./contexts/AppProvider";

const HomeDesktop = lazy(() => import("./pages/Home/desktop/HomePage"));
// const HomeMobile = lazy(() => import("./pages/Home/mobile/HomePage"));
// const SearchPageDesktop = lazy(
//     () => import("./pages/Search/desktop/SearchPage")
// );
// const SearchPageMobile = lazy(() => import("./pages/Search/mobile/SearchPage"));
// const MovieDetailDesktop = lazy(
//     () => import("./pages/MovieDetail/desktop/MovieDetail")
// );
// const MovieDetailMobile = lazy(
//     () => import("./pages/MovieDetail/mobile/MovieDetail")
// );
// const UserMobile = lazy(() => import("./pages/User/mobile/UserPage"));
// const UserDestop = lazy(() => import("./pages/User/desktop/UserPage"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// const RegisterDesktop = lazy(
//     () => import("./pages/Auth/Register/Desktop/Register")
// );

function App() {
    const { isMobile } = useAppContext();
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route element={isMobile ? <MainMobile /> : <MainDesktop />}>
                    <Route
                        path="/home"
                        // element={isMobile ? <HomeMobile /> : <HomeDesktop />}
                        element={<HomeDesktop />}
                    />
                    {/* <Route
                        path="/home/:movieId"
                        element={
                            isMobile ? (
                                <MovieDetailMobile />
                            ) : (
                                <MovieDetailDesktop />
                            )
                        }
                    /> */}
                </Route>
                {/* <Route element={isMobile ? <MainMobile /> : <MainDesktop />}>
                    <Route
                        path="/user"
                        element={isMobile ? <UserMobile /> : <UserDestop />}
                    ></Route>
                </Route>
                <Route element={isMobile ? <MainMobile /> : <MainDesktop />}>
                    <Route
                        path="/search"
                        element={
                            isMobile ? (
                                <SearchPageMobile />
                            ) : (
                                <SearchPageDesktop />
                            )
                        }
                    />
                </Route>
                <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
        </Suspense>
    );
}

export default App;
