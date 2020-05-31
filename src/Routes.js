import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import Settings from './Components/Settings'
import Project from './Components/Project'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/settings' component={Settings} exact />
            <Route path='/project' component={Project} />
        </Switch>
    )
}

export default Routes
