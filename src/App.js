import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
       this.props.setPizzas(data.pizzas);
     });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home items={this.props.items} /> } />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    );
  }
}

// function App() {
//   const[pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas);
//     })
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path='/' render={() => <Home items={pizzas} /> } />
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//   );
// }

const mapStateToProps=(state) => {
  return {
    items: state.pizzas.items,
  };
};
const mapDispatchToProps = {
  setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
