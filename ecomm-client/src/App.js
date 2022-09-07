
import { useRoutes } from 'react-router-dom';
import './App.css';
import { Category } from './components/Category';
import Navbar from './components/Navbar';
import routes from './routes'

function App() {
  const element = useRoutes(routes)
  return (
   <div>
    <Navbar/>
    {element}
    <Category/>
   </div>
  );
}

export default App;
