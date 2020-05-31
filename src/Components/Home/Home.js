import React, { useState, useContext } from 'react'
import classes from './Home.module.css'
import { userAppContext } from '../../App'
const Home = (props) => {
    const userDataContext = useContext(userAppContext)
    const [projects, setprojects] = useState(userDataContext.userData.projects)
    const visitProject = (project) => {
        console.log(window.location)
        window.location.pathname = `/project/${project['name']}`
    }
    return (
        <div className={classes['main']}>
            {
                console.log(userDataContext)
            }
            <div className={classes['project-container']}>
                {
                    (projects && projects.length > 0) ? (
                        projects.map(project =>
                            <div onClick={() => visitProject(project)} className={classes['project']}>
                                <div className={classes['name']}>
                                    <span>
                                        {
                                            project.name ? project.name : 'No name'
                                        }
                                    </span>
                                </div>
                                <div className={classes['about']}>
                                    <span>
                                        {
                                            project.description ? project.description : 'No description'
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    ) : (
                            <span>
                                No projects
                            </span>
                        )
                }
            </div>
            {/* <button onClick={() => props.history.push({ pathname: '/settings' })}>Settings</button> */}
        </div>
    )
}

export default Home
