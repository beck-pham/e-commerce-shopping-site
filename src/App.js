import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import { auth } from './components/firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  // This is the process of how we handle our application being aware of any auth changes on firebase
  // with both Lifecycle method componentDidMount(subscribe) and componentWillUnMount(unsubscribe)
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
