import React from 'react'
import classes from './AppSideNav.module.css'
import { navigateTo } from '../utility'
import { withRouter } from 'react-router-dom'
const AppSideNav = (props) => {
    return (
        <div id={'sidenav'} className={classes['main-container']}>
            <div className={classes['menu']}>
                <span onClick={() => props.history.push({ pathname: '/home' })} title='Create new project'>
                    Home
                </span>
                <span title='Create new project'>
                    Manage Project
                </span>
                <span onClick={() => props.history.push({ pathname: '/settings' })} title='Create new project'>
                    Organization Settings
                </span>
            </div>
        </div>
    )
}

export default withRouter(AppSideNav)
