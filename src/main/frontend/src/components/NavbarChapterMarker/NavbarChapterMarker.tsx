import * as React from 'react';
import styles from './NavbarChapterMarker.scss';

interface Props {
    icon: JSX.Element;
    title: string;
    page: number;

    onClick: (pageNumber: number) => void;
}

export const NavbarChapterMarker = (props: Props): JSX.Element => {
    
    return (
        <div
            className={styles.marker}
            onClick={() => props.onClick(props.page)}
        >
            {props.icon}
            {/* {props.title} */}
        </div>
    )
};

