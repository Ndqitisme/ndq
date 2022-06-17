import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './HeaderChildrenPopper.module.scss';

const cx = classNames.bind(styles);

function HeaderChildrenPopper({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

<<<<<<< HEAD:src/components/Popper/HeaderChildrenPopper/HeaderChildrenPopper.js
HeaderChildrenPopper.propTypes = {
=======
Header.propTypes = {
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb:src/components/Popper/Header/index.js
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

<<<<<<< HEAD:src/components/Popper/HeaderChildrenPopper/HeaderChildrenPopper.js
export default HeaderChildrenPopper;
=======
export default Header;
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb:src/components/Popper/Header/index.js
