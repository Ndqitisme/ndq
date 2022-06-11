import config from '~/config/';
//Import components
import Home from '~/pages/Home';
import ErrorPage404 from '~/pages/ErrorPage404';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Post from '~/pages/Post';
//Import layouts
import { HeaderOnly } from '~/layouts';

//Router Không Cần Đăng Nhập Vẫn Xem Được
const publicRoutes = [
    //path: Đường dẫn truy cập
    //component: Thành phần được render
    //layout: Bố cục được sử dụng

    //Home Page
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.post, component: Post },
    { path: config.routes.profile, component: Profile },

    //Routes Other

    //404
    { path: config.routes.error, component: ErrorPage404, layout: HeaderOnly },
];

//Router Cần Đăng Nhập Vào Mới Xem Được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
