import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppBody from '../AppBody'
import AppSideNav from '../AppSideNav'
import AppHeader from '../AppHeader'
const AppLayout = () => {
    const testname = 'Ajit Jadhav'
    return (
        <BrowserRouter>
            <AppHeader />
            <AppBody />
            <AppSideNav />
        </BrowserRouter>
    )
}

export default AppLayout
