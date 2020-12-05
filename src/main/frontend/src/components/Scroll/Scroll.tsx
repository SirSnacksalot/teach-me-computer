import * as React from 'react';
import styles from './Scroll.scss';
import { ScrollPage } from '../ScrollPage/ScrollPage';
import { Navbar } from '../Navbar/Navbar';

export const Scroll = (): JSX.Element => {
    const WINDOW_WIDTH_PX = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const PX_PER_PAGE = WINDOW_WIDTH_PX * 0.5;
    const scrollWindow = React.useRef<HTMLDivElement>(document.createElement('div'));

    const [scrollX, setScrollX] = React.useState<number>(0);

    const onScroll = (e: any) => {
        const element = e.target;
        const newScrollX = element.scrollLeft;
        setScrollX(newScrollX);
    }

    const updateScrollX = (newPageNumber: number) => {
        const newScrollX = newPageNumber * PX_PER_PAGE;
        scrollWindow.current.scroll({left: newScrollX, behavior: 'smooth' });
    }

    return (
        <div className={styles.scroll}>
            <div className={styles.scroll__edge_left}></div>
            <div className={styles.scroll__edge_right}></div>

            <div 
                className={styles.scroll__content}
                onScroll={onScroll}
                ref={scrollWindow}
            >
                <ScrollPage>
                    <h3>Hey Juan Pablo!</h3>
                    <h4>Don&apos;t worry, more stuff is coming soon haha</h4>
                    <h2 className={styles.scroll__content__chapter__title}>
                        1. What is a Computer?
                    </h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>2. A computer is something that <strong><em>computes</em></strong>.</h2>
                    <div>Information!</div>
                </ScrollPage>
                <ScrollPage>
                    <h2>3.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>4. Chapter 2</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>5.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>6.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>7.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>8.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>9.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>10.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>11.  Chapter 3</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>12.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>13.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>14.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>15.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>16.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>17.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>18.  Chapter 4</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>19.</h2>
                </ScrollPage>
                <ScrollPage>
                    <h2>20. End</h2>
                </ScrollPage>
                <div className={styles.scroll__content__endpad}></div>
            </div>

            <Navbar 
                scrollX={scrollX}
                updateScroll={updateScrollX}
                totalPages={20}
                chapterPages={[0, 3, 10, 17, 19]}
            />
        </div>
    );
}
