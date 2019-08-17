import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import App from './App'
// import loginComponent from './components/loginComponent'
// import { requireAuthentication } from './components/AuthenticatedComponent'
import Home from './containers/home/home'
import Content from './containers/content/content'

const Routes = () => (
    <App>
        <Switch>
            {/* <Route exact path="/app" component={App} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/bride" component={Content} />
            {/* <Route  path="/listing" component={requireAuthentication(UsersListingComponent)}/>  */}
        </Switch>
    </App> )

export default Routes