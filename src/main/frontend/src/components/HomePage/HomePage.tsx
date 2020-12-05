import * as React from 'react';
import { Header } from '../Header/Header';
import { Scroll } from '../Scroll/Scroll';

export const HomePage = (): JSX.Element => {

    return (
        <div>
            <Header />
            <Scroll />
        </div>
    );
}
