<<<<<<< HEAD
export { default } from './PopperWrapper';
=======
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PopperWrapper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default PopperWrapper;
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb
