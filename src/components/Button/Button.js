import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    );
};

export default Button;