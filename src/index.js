import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from 'react-router-dom'

import './index.css';

import { Login, Registration } from './modules/account/pages'
import { Product, Cart, Main, Support } from './modules/main/pages'
import { MyComponent, ErrorBoundary } from './share';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter >
        <ErrorBoundary>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/product/:productId'} element={<Product />} />
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'/support'} element={<Support />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/registration'} element={<Registration />} />
                <Route path={'*'} element={ <MyComponent /> } />
            </Routes>
        </ErrorBoundary>
    </HashRouter >
);


