import './App.css';
import Navi from './layout/Navi';
import History from './sections/History';
import Jumbotron from './sections/Jumbotron';
import Whatido from './sections/Whatido';
import Footer from './layout/Footer';
import Project from './sections/Project';
import Customers from './sections/Customers';
import Socials from './sections/Socials';

function App() {
  return (
    <div className="App">
      <Navi/>
      
      <header className="App-header">
        <Project/>
      </header>

      <header className="App-header">
        <Jumbotron/>
      </header>

      <header className="App-header">
        <Whatido/>
      </header>

      <header className="App-header">
        <History/>
      </header>

      <header className="App-header">
        <Customers/>
      </header>
      
      <header className="App-header">
        <Socials />
      </header>

    <Footer/>
    </div>
  );
}

export default App;