import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import styles from './ExtraLayout.module.scss';

const cx = classNames.bind(styles);

function ExtraLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

<<<<<<< HEAD:src/layouts/ExtraLayout/ExtraLayout.js
ExtraLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ExtraLayout;
=======
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb:src/layouts/HeaderOnly/index.js
