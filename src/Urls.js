const BASE_URL = 'http://192.168.14.102:3001'
export const Urls = {
    'project': {
        'all-projects': `${BASE_URL}/project/my-projects`,
        'project-details': `${BASE_URL}/project`,
        'create-project': `${BASE_URL}/project`
    },
    'task': {
        'all-tasks': `${BASE_URL}/project/my-tasks`,
        'task-details': `${BASE_URL}/project/task`,
        'create-task': `${BASE_URL}/project/task`
    }
}