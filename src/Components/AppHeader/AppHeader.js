import React, { useState } from 'react'
import classes from './AppHeader.module.css'
const AppHeader = () => {
    const [userMenu, setuserMenu] = useState(false)
    const [sideMenu, setsideMenu] = useState(false)
    const toggleUserMenu = () => setuserMenu(!userMenu)
    const toggleSideNav = () => {
        if (sideMenu) {
            document.getElementById('sidenav').style.left = '-70%'
            setsideMenu(false)
        }
        else {
            setsideMenu(true)
            document.getElementById('sidenav').style.left = '0%'
        }
    }
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
    const setProjectHeader = () => {
        if (window.location.pathname.includes('/project')) {
            if (window.location.pathname.split('/')[2].includes('%20')) {
                return window.location.pathname.split('/')[2].replace('%20', ' ')
            }
            return window.location.pathname.split('/')[2]
        }
        return 'Home'
    }
    return (
        <>
            <UserMenu />
            <div className={classes['container']}>
                <div className={classes['collapse-menu-button']}>
                    <i onClick={toggleSideNav} style={{ transform: sideMenu ? 'rotate(90deg)' : 'rotate(0deg)' }} className={'fa fa-cog'}></i>
                </div>
                <div className={classes['header-title']}>
                    <b>
                        {
                            setProjectHeader()
                        }
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
