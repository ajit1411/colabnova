import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from './Components/AppLayout/AppLayout';
const userData = {
  'userData': {
    'info': {
      'name': 'Ajit Jadhav',
      'email': 'ajitjadhav2310@outlook.com'
    },
    'organization': 'Jadhav Group',
    'projects': [
      {
        'name': 'ColabNova',
        'description': 'Test project',
        'owner': 'Akash',
        'projectId': '30156871',
        'tasks': [
          {
            'title': 'Project solutions',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': true
          },{
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': false
          },
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': false
          }
        ]
      },
      {
        'name': 'ColabClub',
        'description': 'Test project',
        'owner': 'Akash Hiwale',
        'projectId': '30156872',
        'tasks': [
          {
            'title': 'Create Login Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': false
          },
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': true
          }
        ]
      },
      {
        'name': 'Test Project',
        'description': '',
        'owner': 'Dhruv',
        'projectId': '30156873',
        'tasks': [
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': false
          },
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': true
          },
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': false
          },
          {
            'title': 'Create Signup Page',
            'owner': 'Ajit Jadhav',
            'date': '2020-01-06',
            'isDue': true
          }
        ]
      }
    ]
  }
}
export const userAppContext = React.createContext(userData)

function App() {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default App;
