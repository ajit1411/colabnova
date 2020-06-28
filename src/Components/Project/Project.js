import React, { useState, useEffect, useContext } from 'react'
import classes from './Project.module.css'
import { getProjectData } from './../utility'
import { userAppContext } from '../../App'
import { Accordion, Card } from 'react-bootstrap'

const Task = ({ task, index }) => {
    return (
        <div className={classes['task']}>
            <Card style={{ margin: '2% 0' }}>
                <Accordion.Toggle eventKey={index} as={Card.Header} style={{ backgroundColor: 'white' }}>
                    <div className={classes['task-header']}>
                        <div className={classes['title']}>
                            {
                                task.title
                            }
                        </div>
                        <div className={classes['status']}>
                            {
                                task.isDue == false ? (
                                    <i title={'Your task is overdue'} className={'fa fa-check-circle'} style={{color: 'green', fontSize: '135%'}}></i>
                                ) : (
                                    <i title={'You are on the track'} className={'fa fa-info-circle'} style={{color: 'red', fontSize: '135%'}}></i>
                                )
                            }
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body style={{ textAlign: 'left' }}>
                        <div className={classes['task-description']}>
                            <div className={classes['owner']}>
                                {
                                    task.owner ? `By ${task.owner}` : ''
                                }
                            </div>
                            <div className={classes['date']}>
                                {
                                    `on ${task.date}`
                                }
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    )
}

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
            <div className={classes['task-container']}>
                <Accordion>
                    {
                        projectData.tasks && projectData.tasks.length > 0 ? (
                            projectData.tasks.map((task, index) => (
                                <Task task={task} index={index} />
                            ))
                        ) : null
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default Project
