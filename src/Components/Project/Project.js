import React, { useState, useEffect, useContext } from 'react'
import classes from './Project.module.css'
import { getProjectData } from './../utility'
import { userAppContext } from '../../App'
const Project = () => {
    const userAppData = useContext(userAppContext)
    const [project, setproject] = useState('')
    const [projectData, setprojectData] = useState({})

    useEffect(() => {
        console.log(window.location.pathname.split('/')[2])
        setproject(window.location.pathname.split('/')[2])
        setprojectData(getProjectData(window.location.pathname.split('/')[2]))
    }, [])

    const getProjectData = (projectName) => {
        if (projectName.includes('%20')) {
            projectName = projectName.replace('%20', ' ')
        }
        let projects = userAppData.userData.projects
        for (let i = 0; i < projects.length; i++) {
            if (projects[i]['name'].toLowerCase() == projectName.toLowerCase()) {
                return projects[i]
            }
        }
    }
    return (
        <div className={classes['main-container']}>
            <div className={classes['info']}>
                <div className={classes['projectName']}>
                    <b>
                        {
                            projectData ? projectData['name'] : 'No name given'
                        }
                    </b>
                </div>
                <div className={classes['projectOwner']}>
                    <span>
                        {
                            projectData ? projectData['owner'] ? <>Owned by <b>{projectData['owner']}</b></> : 'No owner name' : ''
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Project
