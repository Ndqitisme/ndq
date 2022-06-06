import { useLayoutEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function ScrollProcess() {
    const [scrollValue, setScrollValue] = useState(0);
    const handleScroll = () => {
        const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        setScrollValue(
            Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
        );
    };

    useLayoutEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('scrollProcess')}>
            <div
                className={cx('scrollValue')}
                style={{ width: scrollValue + '%' }}
            ></div>
        </div>
    );
}

export default ScrollProcess;
