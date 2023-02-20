import Header from './components/Header/Header';
import Main from './components/Main'
import './App.css';

import { userContext } from './context/userContext';

import { useState } from 'react';

function App() {

  const [user = {}, setUser] = useState({name:"", email:"", age:"", photo:""});

  const getForm = (name, email, age, photo) => setUser({ name, email, age, photo });
  const clear = () => setUser({});

  const data = {
    user,
    getForm,
    clear
  }

  return (
    <div className="App">
      <userContext.Provider value={data}>
        <Header />
        <Main />
      </userContext.Provider>
    </div>
  );
}

export default App;
