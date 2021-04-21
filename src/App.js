import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin';
import Service from './components/Service/Service/Service';
import AddReview from './components/AddReview/AddReview';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Header from './components/Header/Header';
import ManageService from './components/ManageService/ManageService';
import BookService from './components/BookService/BookService';
import Order from './components/Order/Order';
import AllOrder from './components/AllOrder/AllOrder';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    message: '',
    id:''

})
  return (
    <div>
        <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header/>
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>              
              <Route path="/login">
                <Login/>
              </Route>               
              <Route path="/service">
                <Service/>
              </Route>               
              <Route path="/bookYourService">
                <Service/>
              </Route>               
              <Route path="/order">
                <Order/>
              </Route>               
              <Route path="/allOrder">
                <AllOrder/>
              </Route>               
              <Route path="/manageService">
                <ManageService/>
              </Route>              
              <PrivateRoute path="/bookService/:serviceId">
                <BookService/>
              </PrivateRoute>               
              <PrivateRoute path="/bookService">
                <BookService/>
              </PrivateRoute>               
              <PrivateRoute path="/admin">
                <Admin/>
              </PrivateRoute>              
              <Route path="/makeAdmin">
                <MakeAdmin/>
              </Route>              
              <Route path="/addReview">
                <AddReview/>
              </Route>        
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="*">
                  <NotFound/>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
