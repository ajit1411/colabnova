import React, { useState, useEffect } from 'react'
import classes from './Home.module.css'
import { writeDataToConsole } from './../utility'
import Axios from 'axios'
import { Urls } from './../../Urls'
import Loader from '../Loader'
import saveIcon from './../../Assets/save-icon.webp'
const Home = (props) => {
    const [projects, setprojects] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const visitProject = (project) => {
        console.log(window.location)
        window.location.pathname = `/project/${project['projectId']}`
    }
    useEffect(() => {
        setisLoading(true)
        Axios.get(`${Urls.project["all-projects"]}`)
            .then(result => {
                writeDataToConsole('project data', result)
                setprojects(result.data && result.data['my-projects'] ? result.data['my-projects'] : [])
                setisLoading(false)
            })
            .catch(error => {
                setisLoading(false)
                writeDataToConsole('project error', error)
            })
    }, [])

    /* ---------------------- Project Tile ---------------------- */
    const ProjectTile = ({ project }) => {
        return (
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
    }

    return (
        <React.Fragment>
            <Loader show={isLoading} />
            <div className={classes['main']}>
                <div className={classes['create-project-container']}>
                    <img className={classes['save-icon']} src={saveIcon} />
                </div>
                <div className={classes['project-container']}>
                    {
                        (projects && projects.length > 0) ? (
                            projects.map(project =>
                                <ProjectTile project={project} />
                            )
                        ) : (
                                ''
                            )
                    }
                </div>
                {/* <button onClick={() => props.history.push({ pathname: '/settings' })}>Settings</button> */}
            </div>
        </React.Fragment>
    )
}

export default Home
