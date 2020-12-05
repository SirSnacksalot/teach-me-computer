import * as React from 'react';
import { render } from 'react-dom';
import { HomePage } from './components/HomePage/HomePage';

import './index.scss';


render(
    <HomePage />,
    document.getElementById('home-root')
)