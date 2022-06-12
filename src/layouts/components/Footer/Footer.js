import classNames from 'classnames/bind';

import { TiktokIcon, YoutubeIcon, FacebookIcon } from '~/components/Icons';
import styles from './Footer.module.scss';
import ScrollProcess from './ScrollProcess';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('status')}>
                    <div className={cx('')}>Trạng Thái: 200 OK</div>
                </div>
                <div className={cx('follow-author')}>
                    <a
                        className={cx('item')}
                        href="https://www.facebook.com/nquyitisme"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        className={cx('item')}
                        href="https://youtube.com/channel/UCoRQ7_Zb6JBFvRoJQGdtNCw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <YoutubeIcon />
                    </a>
                    <a
                        className={cx('item')}
                        href="https://www.tiktok.com/@ndqk3gaming"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TiktokIcon />
                    </a>
                </div>
            </div>
            <ScrollProcess />
        </footer>
    );
}

export default Footer;
