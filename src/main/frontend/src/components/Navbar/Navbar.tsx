import * as React from 'react';
import styles from './NavBar.scss';
import classNames from 'classnames';
import * as chroma from 'chroma-js';
import { NavbarChapterMarker } from '../NavbarChapterMarker/NavbarChapterMarker';

import { faLaptop, faWifi, faFileCode, faWindowRestore, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarChapterFiller } from '../NavbarChapterFiller/NavbarChapterFillter';

interface Props {
    scrollX: number;
    totalPages: number;
    chapterPages: number[];
    updateScroll: (newPageNumber: number) => void;
}

export const Navbar = (props: Props): JSX.Element => {
    const WINDOW_WIDTH_PX = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const PX_PER_PAGE = WINDOW_WIDTH_PX * 0.5;

    const totalChapters = props.chapterPages.length;
    const totalNonchapterPages = props.totalPages - totalChapters;
    const chapterMarkerWidth = 30;
    const currentPageNumber = (props.scrollX / PX_PER_PAGE) + 0.2;


    const onClick = (pageNumber: number) => {
        props.updateScroll(pageNumber);
    }

    const startColor = '#43cea2';
    const endColor = '#185a9d';
    const getColorHexFromPageNumber = (pageNumber: number) => {
        const colorScale = chroma.scale([startColor, endColor]);
        const percentage = pageNumber / props.totalPages;
        const markerColor = colorScale(percentage).hex();
        return markerColor;
    }

    const getColorStyle = (pageNumber: number) => {
        return {
            color: getColorHexFromPageNumber(pageNumber),
        }
    }

    const getBookmarkStyle = () => {
        const markerWidth = 30;
        const roundedPageNumber = Math.floor(currentPageNumber);
        const passedChapterMarkers = props.chapterPages.reduce(function(passed, n) {
            if (roundedPageNumber > n) { 
                passed += 1;
            }
            return passed;
        }, 0);
        
        let pageOffsetPercentage = (currentPageNumber - passedChapterMarkers) / (totalNonchapterPages);
        if (props.chapterPages.includes(roundedPageNumber)) {
            pageOffsetPercentage = (roundedPageNumber  - passedChapterMarkers) / totalNonchapterPages;
        }
        
        const passedMarkerPadding = passedChapterMarkers * markerWidth;
        console.log(
            `pageNumber: ${currentPageNumber}
roundedPageNumber: ${roundedPageNumber}
pageOffsetPercentage: ${pageOffsetPercentage}
passedChapterMarkers: ${passedChapterMarkers}
            
            `
        )

        return {
            left: `calc(((100% - ${totalChapters * markerWidth}px) * ${pageOffsetPercentage}) + ${passedMarkerPadding}px)`,
        }
    }

    const onChapterPage = () => props.chapterPages.includes(Math.floor(currentPageNumber));

    return (
        <div className={styles.navbar}>
            <div
                className={styles.navbar__overlay}
            >
                <div 
                    className={classNames({
                        [styles.navbar__overlay__bookmark]: true,
                        [styles.navbar__overlay__bookmark_rotated]: onChapterPage(),
                    })}
                    style={getBookmarkStyle()}
                >

                </div>
            </div>

            {/* <h1>scroll: {props.scrollX}</h1> */}
            <NavbarChapterMarker
                icon={<FontAwesomeIcon icon={faLaptop} style={getColorStyle(0)} />}
                title='What is a Computer?'
                page={0}
                onClick={onClick}
            />

            <NavbarChapterFiller
                startPage={0}
                endPage={2}
                totalPages={props.totalPages}
                totalChapters={totalChapters}
                chapterMarkerWidth={chapterMarkerWidth}
                onClick={onClick}
            />

            <NavbarChapterMarker
                icon={<FontAwesomeIcon icon={faFileCode} style={getColorStyle(4)} />}
                title='What is a program?'
                page={3}
                onClick={onClick}
            />

            <NavbarChapterFiller
                startPage={3}
                endPage={9}
                totalPages={props.totalPages}
                totalChapters={totalChapters}
                chapterMarkerWidth={chapterMarkerWidth}
                onClick={onClick}
            />

            <NavbarChapterMarker
                icon={<FontAwesomeIcon icon={faWifi} style={getColorStyle(10)}/>}
                title='What is the Internet?'
                page={10}
                onClick={onClick}
            />

            <NavbarChapterFiller
                startPage={10}
                endPage={16}
                totalPages={props.totalPages}
                totalChapters={totalChapters}
                chapterMarkerWidth={chapterMarkerWidth}
                onClick={onClick}
            />

            <NavbarChapterMarker
                icon={<FontAwesomeIcon icon={faWindowRestore} style={getColorStyle(18)}/>}
                title='How is a website made?'
                page={17}
                onClick={onClick}
            />

            <NavbarChapterFiller
                startPage={17}
                endPage={18}
                totalPages={props.totalPages}
                totalChapters={totalChapters}
                chapterMarkerWidth={chapterMarkerWidth}
                onClick={onClick}
            />

            <NavbarChapterMarker
                icon={<FontAwesomeIcon icon={faSmileBeam} style={getColorStyle(21)}/>}
                title='How is a website made?'
                page={19}
                onClick={onClick}
            />
        </div>
    );
}
