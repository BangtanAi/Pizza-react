import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { fetchPizzas, setPizzas } from './redux/actions/pizzas';


function App () {  
  React.useEffect(() => { 
     console.log(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} /> 
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;

