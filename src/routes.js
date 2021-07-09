import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Bags from './components/Bags/Bags'
import Dolls from './components/Dolls/Dolls'
import Scarves from './components/Scarves/Scarves'
import Hotties from './components/Hotties/Hotties'
import Contact from './components/Contact/Contact'
import Checkout from './components/Checkout/Checkout';

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/bags' component={Bags}/>
        <Route path= '/dolls' component={Dolls}/>
        <Route path= '/scarves' component={Scarves}/>
        <Route path= '/humble-hotties' component={Hotties}/>
        <Route path= '/contact' component={Contact}/>
        <Route path= '/checkout' component={Checkout}/>
    </Switch>
)