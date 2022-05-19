import './App.css';

import Main from './Main';
import OneProduct from './components/OneProduct';
import { BrowserRouter, Route } from 'react-router-dom';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route exact path='/products/:id'>
          <OneProduct></OneProduct>
        </Route>
        <Route exact path='/edit/:id'>
          <Update></Update>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
