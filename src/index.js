import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './js/App';
import 'tw-elements';

import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
);
