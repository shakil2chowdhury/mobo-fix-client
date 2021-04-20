
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddServices from './components/Dashboard/AddServices/AddServices';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AllOrdersList from './components/Dashboard/OrderList/AllOrdersList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <PrivateRoute path="/admin">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:serviceId">
          <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/addServices">
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute path="/AllOrderList">
          <AllOrdersList></AllOrdersList>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/manageServices">
          <ManageServices></ManageServices>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
