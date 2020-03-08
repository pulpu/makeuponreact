import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
// import loginComponent from './components/loginComponent'
// import { requireAuthentication } from './components/AuthenticatedComponent'
import NoMatch from "./pages/NoMatch"
import ImagesContent from "./components/content/imagesContent"
import Test from './pages/test'

class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <ImagesContent {...props} page={'home'}/>} />
                    <Route exact path="/brides" render={(props) => <ImagesContent {...props} page={'brides'}/>} />
                    <Route exact path="/cover" render={(props) => <ImagesContent {...props} page={'cover'}/>} />
                    <Route exact path="/test" component={Test}/>} />
                    {/*{user.role === "student" ? (*/}
                    {/*    <Route exact path="/gigi" render={(props) => <ImagesContent {...props} page={'cover'}/>} />*/}
                    {/*) : (*/}
                    {/*    <Redirect to="/" />*/}
                    {/*)}*/}
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;

