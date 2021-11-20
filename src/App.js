import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Order from './components/Order/Order';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/order/:id">
              <Order></Order>
            </Route>
            <Route path="/logIn">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
