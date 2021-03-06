import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Common/Header';
import Login from './Components/Login/Login';
import Footer from './Components/Common/Footer';
import NotFound from './Components/NotFound';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddMenu from './Components/AddMenu/AddMenu';



function App() {
  return (
    <div className="App">
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
            <PrivateRoute path="/booking/:foodId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/addMenu">
              <AddMenu></AddMenu>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
