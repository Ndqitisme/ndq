import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    {
        to,
        href,
        primary = false,
        outline = false,
        text = false,
        rounded = false,
        disabled = false,
        small,
        large,
        children,
        className,
        leftIcon,
        rightIcon,
        ...passProp
    },
    ref
) {
    let Component = 'button';

    const props = {
        ...passProp,
    };

    //Remove event handler
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx(
        'wrapper',
        { primary, outline, text, rounded, disabled },
        { small, large },
        { [className]: className }
    );

    return (
        <Component ref={ref} className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default forwardRef(Button);
