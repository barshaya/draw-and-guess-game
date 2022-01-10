import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Login from './pages/Login/Login'

function App() {
  const [userName, setUserName] = useState('')

  const onAddName=(name)=>{
    setUserName(name)
  }

  return (
    <div className="App">
      {userName === '' ?
        <Login onAddName={onAddName}></Login> :
        <Header name={userName}></Header>
      }
    </div>
  );
}

export default App;
