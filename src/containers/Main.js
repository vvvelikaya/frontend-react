import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/common/navbar/Navbar'
import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'

class Main extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route exact path="/user" component={UserInfo} />
                    <Redirect to="/home" />
                </Switch>
            </>
        )
    }
}

export default Main