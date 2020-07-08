import React, { useState } from 'react'
import classes from './Loader.module.css'
import loaderGif from './../../Assets/loader.gif'
const Loader = ({ show = true }) => {
    return (
        <>
            {
                show ? (
                    <div className={classes['container']}>
                        <img src={loaderGif} />
                    </div>
                ) : ''
            }
        </>
    )
}

export default Loader
