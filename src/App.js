import './App.css';
import Navi from './layout/Navi';
import Home from './pages/Home';
import History from './sections/History';
import Jumbotron from './sections/Jumbotron';
import Whatido from './sections/Whatido';
import Footer from './layout/Footer';
import Project from './sections/Project';
import Customers from './sections/Customers';
import Socials from './sections/Socials';
import Contact from './sections/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div>
      <Navi/>
      <Switch>
        <Route path='/contact' component= { Contact } />
        <Route path='/about' component= { History } />
        <Route path='/home' component= { Home } />
        <Route exact path='/' component= { Home } />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;