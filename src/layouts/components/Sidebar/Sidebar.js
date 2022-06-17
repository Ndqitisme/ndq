import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    CineCameraIcon,
    GZIcon,
    HomeIcon,
    PeopleIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Trang Chủ"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                />
                <MenuItem
                    title="Phòng Live Stream"
                    to={config.routes.liveStream}
                    icon={<CineCameraIcon />}
                />
                <MenuItem
                    title="Cộng Đồng"
                    to={config.routes.groups}
                    icon={<PeopleIcon />}
                />
                <MenuItem
                    title="Tiện Ích Mở Rộng"
                    to={config.routes.extenstion}
                    icon={<GZIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
