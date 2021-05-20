import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components-amazon/Home';
import CartForm from './components-amazon/CartForm';
import Invoice from './components-amazon/Invoice';
import Confirm from './components-amazon/Confirm';
import Error from './components-amazon/Error';



function App() {
  return (
    <div className="App"> 
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartForm} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/confirm" component={Confirm} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
