import * as React from 'react';
import styles from './NavbarChapterFiller.scss';

interface Props {
    startPage: number;
    endPage: number;
    totalPages: number;
    totalChapters: number;
    chapterMarkerWidth: number
    onClick: (pageNumber: number) => void;
}

export const NavbarChapterFiller = (props: Props): JSX.Element => {
    
    const onClick = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const pxPercentageOffset = x / rect.width;
        const pageTotal = props.endPage - props.startPage;
        const pageOffset = pageTotal * pxPercentageOffset;
        const pageNumber = props.startPage + pageOffset + 0.8;
        
        props.onClick(pageNumber);
    }

    const getStyle = () => {
        const chapterPageTotal = props.endPage - props.startPage;
        const pagePercentage = chapterPageTotal / (props.totalPages - props.totalChapters);
        const chapterMarkerWidths = props.totalChapters * props.chapterMarkerWidth;
        return {
            width: `calc((100% - ${chapterMarkerWidths}px) * ${pagePercentage})`,
        }
    }

    return (
        <div
            className={styles.filler}
            onClick={onClick}
            style={getStyle()}
        >
            <div
                className={styles.filler__line}
            >

            </div>
        </div>
    )
};

