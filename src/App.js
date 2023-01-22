import './App.css';
import './components/Display.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Agent from './components/Agent';

function App() {
  return (
    <div className="main">
      <h5>Hello admins</h5>
      <h5>View the status of your agents and the evolotion of their latest alerts</h5>
      <div className='text'>
        <h2>Installed agents by their status</h2>
      </div>
      <Agent/>
    </div>
  );
}

export default App;
