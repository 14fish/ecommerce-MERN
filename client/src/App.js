import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Container } from 'react-bootstrap';
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  ShippingScreen,
  PaymentScreen,
  PlaceOrderScreen,
  OrderScreen,
  UserListScreen,
  UserEditScreen,
  ProductListScreen,
  ProductEditScreen,
  OrderListScreen,
} from './views';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/page/:pageNumber' exact component={HomeScreen} />
          <Route
            path='/search/:keyword/page/:pageNumber'
            exact
            component={HomeScreen}
          />
          <Route path='/login' component={LoginScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeOrder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/productList' component={ProductListScreen} />
          <Route
            path='/admin/productList/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/orderList' component={OrderListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
