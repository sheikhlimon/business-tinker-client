import "./App.css";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Home/Contact/Contact";
import Services from "./components/Home/Services/Services";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/DashBoard/DashBoard/Dashboard";
import OrderList from "./components/DashBoard/OrderList/OrderList";
import AddService from "./components/DashBoard/AddService/AddService";
import Book from "./components/DashBoard/Book/Book";
import BookingList from "./components/DashBoard/BookingList/BookingList";
import Review from "./components/DashBoard/Review/Review";
import ManageServices from "./components/DashBoard/ManageServices/ManageServices";
import MakeAdmin from "./components/DashBoard/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/manageservices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        <Route path="/book/:id">
            <Book></Book>
          </Route>
          <Route path="/bookinglist">
            <BookingList></BookingList>
          </Route>
          <Route path="/addreview">
            <Review></Review>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/orderlist">
            <OrderList></OrderList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
