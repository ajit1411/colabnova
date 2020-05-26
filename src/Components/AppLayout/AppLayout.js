import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppBody from '../AppBody'
import AppSideNav from '../AppSideNav'
import AppHeader from '../AppHeader'
import Test from '../Test'
const AppLayout = () => {
    const testname = 'Ajit Jadhav'
    return (
        <BrowserRouter>
            <AppHeader />
            <AppBody />
            {/* <Test name={testname} email='ajit@jadhav.com' /> */}
            <AppSideNav />
        </BrowserRouter>
    )
}

export default AppLayout
