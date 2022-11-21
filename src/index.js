import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
// import App from './App';

import { Login, Registration } from './modules/account/pages'
import { Main } from './modules/main/pages'
import { MyComponent} from './share/Page404/Page404'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/registration'} element={<Registration />} />
            <Route path={'*'} element={ MyComponent } />

        </Routes>
    </BrowserRouter>
);


