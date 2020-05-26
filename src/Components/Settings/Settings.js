import React from 'react'

const Settings = (props) => {
    return (
        <div>
            <h5>
                ColabNova Settings
            </h5>
            <button onClick={() => props.history.push({ pathname: '/home' })}>Home</button>
        </div>
    )
}

export default Settings
