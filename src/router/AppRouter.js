import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route component={FirstStep} path="/" exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
