import * as React from 'react';
import styles from './Header.scss';

export const Header = (): JSX.Element => {

    return (
        <div className={styles.header}>
            <h1
                className={styles.header__title}
            >
                Teach Me Computer
            </h1>
        </div>
    );
}
