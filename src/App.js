import './App.css';
import './components/Display.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Agent from './components/Agent';

function App() {
  return (
    <div className="main">
      <Header/>
      <Agent/>
    </div>
  );
}

export default App;
