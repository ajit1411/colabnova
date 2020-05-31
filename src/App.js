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
        'owner': 'Ajit Jadhav',
        'projectId': '30156871'
      },
      {
        'name': 'ColabClub',
        'description': 'Test project',
        'owner': 'Akash Hiwale',
        'projectId': '30156872'
      },
      {
        'name': 'Test Project',
        'description': '',
        'owner': 'Dhruv',
        'projectId': '30156873'
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
