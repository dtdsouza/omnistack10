import React, {useEffect,useState} from 'react';
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async () => {
      const {data: {data}} = await api.get('/users')
      setUsers(data)
    }
    getUsers()
  },[])

  const handleAddDev = async (userData) => {
    const { data: { data } } = await api.post('/users',userData)

    setUsers([...users, data])
  }

  return (
    <div className="App">
      <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev}/>
      </aside>
      
      <main>
        <ul>
          {users.map(user => <DevItem key={user._id} user={user } />)}
        </ul>
      </main>
    </div>
  );
}

export default App;
