import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './ErrorPage404.module.scss';

const cx = classNames.bind(styles);

function ErrorPage404() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>404</div>
            <div className={cx('content')}>Page not found</div>
            <div className={cx('content-1')}>
                Trang bạn cố gắng truy cập không tồn tại
            </div>
            <br />
            <Link to={config.routes.home} className={cx('comeback-home')}>
                Quay Về Trang Chủ
            </Link>
        </div>
    );
}

export default ErrorPage404;
