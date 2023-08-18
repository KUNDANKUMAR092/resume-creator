import Header from './common/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className='main_container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
