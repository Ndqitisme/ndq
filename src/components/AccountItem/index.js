<<<<<<< HEAD
export { default } from './AccountItem';
=======
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar-account')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info-account')}>
                <h4 className={cx('name-account')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('type-account')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('id-account')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

function UserAccountItem({ data }) {
    return (
        <div className={cx('wrapper-user-account')}>
            <a className={cx('link-user-account')} href={data.avatar}>
                <Image
                    className={cx('avatar-user-account')}
                    src={data.avatar}
                    alt={data.full_name}
                />
            </a>
            <div className={cx('info-user-account')}>
                <h4 className={cx('name-user-account')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('type-user-account')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('id-user-account')}>{data.nickname}</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

UserAccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export { AccountItem, UserAccountItem };
export default AccountItem;
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb
