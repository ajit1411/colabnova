import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h4>
                Home Component
            </h4>
            <button onClick={() => props.history.push({ pathname: '/settings' })}>Settings</button>
        </div>
    )
}

export default Home
