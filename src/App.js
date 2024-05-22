import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import AddOrder from 'components/AddOrder/AddOrder';
import AddOrderPage from 'pages/AddOrderPage/AddOrderPage';
import StoragePage from 'pages/StoragePage/StoragePage';
import ClientPage from 'pages/ClientPage/ClientPage';
import LeaveOrderPage from 'pages/LeaveOrderPage/LeaveOrderPage';
import CheckStatusPage from 'pages/CheckStatusPage/CheckStatusPage';
import NewOrdersPage from 'pages/NewOrdersPage/NewOrdersPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
          <Routes>
            <Route path={"/orders"} element={<OrdersPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/register"} element={<RegisterPage/>}/>
            <Route path={"/addorderpage"} element={<AddOrderPage/>}/>
            <Route path={"/storagepage"} element={<StoragePage/>}/>
            <Route path={"/clientpage"} element={<ClientPage/>}/>
            <Route path={"/leaveorderpage"} element={<LeaveOrderPage/>}/>
            <Route path={"/checkstatuspage"} element={<CheckStatusPage/>}/>
            <Route path={"/neworderspage"} element={<NewOrdersPage/>}/>
          </Routes>
      </div>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;