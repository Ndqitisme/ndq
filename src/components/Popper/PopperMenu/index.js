import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import PopperMenuItem from './PopperMenuItem';
import styles from './PopperMenu.module.scss';
import { PopperWrapper, Header } from '~/components/Popper';
import { UserAccountItem } from '~/components/AccountItem';

const cx = classNames.bind(styles);

function PopperMenu({
    user = { currentUser: false },
    children,
    items = [],
    hideOnClick = false,
    onChange = () => {},
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const userHeader = () => {
        if (user.currentUser) {
            return <UserAccountItem data={user} />;
        }
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <PopperMenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            offset={[14, 10]}
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-menu')}>
                        {history.length > 1 ? (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, -1));
                                }}
                            />
                        ) : (
                            userHeader()
                        )}
                        <div className={cx('wrapper-item')}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

PopperMenu.propTypes = {
    user: PropTypes.object,
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default PopperMenu;
