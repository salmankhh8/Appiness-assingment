import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { selectUser } from './features/userSlice';

function App() {
 const user = useSelector(selectUser)// gwet user value
  return (
    <div className="App">
      <header className="App-header">
      { user ? <Home /> : <Login />
} 
      </header>
    </div>
  );
}

export default App;
