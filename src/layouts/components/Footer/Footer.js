import classNames from 'classnames/bind';
import { useRef, useEffect } from 'react';

import { TiktokIcon, YoutubeIcon, FacebookIcon } from '~/components/Icons';
import styles from './Footer.module.scss';
import ScrollProcess from './ScrollProcess';
import audios from '~/assets/audios';

const cx = classNames.bind(styles);

function Footer() {

    const audioRef = useRef();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 67) {
                audioRef.current.play();
            } else if (e.keyCode === 80) {
                audioRef.current.pause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('status')}>
                    <div className={cx('')}>Trạng Thái: 200 OK</div>
                </div>
                <audio
                    ref={audioRef}
                    src={audios.DemonSlayerLQM}
                    autoPlay
                    controls
                    hidden
                ></audio>
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
