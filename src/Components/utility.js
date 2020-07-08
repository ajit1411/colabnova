import Axios from "axios"
import { Urls } from "../Urls"

export const data = () => { return 'ajit' }
export const writeDataToConsole = (title, data) => {
    console.log(`------------------- ${title.toUpperCase()} -------------------`)
    console.log(data)
    console.log(`------------------- ${title.toUpperCase()} -------------------`)
}

export const getProjectData = (projectId) => {
    return Axios.get(`${Urls.project["project-details"]}/${projectId}`)
}