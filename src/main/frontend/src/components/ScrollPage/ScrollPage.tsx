import * as React from 'react';
import styles from './ScrollPage.scss';

export const ScrollPage = (props: React.PropsWithChildren<unknown>): JSX.Element => {

    return (
        <div className={styles.scrollPage}>
            {props.children}
        </div>
    );
}
