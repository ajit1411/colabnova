import React, { useState } from 'react'
import classes from './AppHeader.module.css'
const AppHeader = () => {
    const [userMenu, setuserMenu] = useState(false)
    const toggleUserMenu = () => setuserMenu(!userMenu)
    const UserMenu = () => {
        return (
            <div className={`${classes['user-menu']}`}>
                <a>
                    My Account
                </a>
                <a>
                    My Projects
                </a>
                <a>
                    Logout
                </a>
            </div>
        )
    }
    return (
        <>
            <UserMenu />
            <div className={classes['container']}>
                <div className={classes['collapse-menu-button']}>
                    <i className={'fa fa-cog'}></i>
                </div>
                <div className={classes['header-title']}>
                    <b>
                        ColabNova
                </b>
                </div>
                <div className={classes['user-icon']}>
                    <i onClick={toggleUserMenu} className={'fa fa-user-circle'}></i>
                </div>
            </div>
        </>
    )
}

export default AppHeader
