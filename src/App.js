import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }
  //
  // This is the process of how we handle our application being aware of any auth changes on firebase
  // with both Lifecycle method componentDidMount(subscribe) and componentWillUnMount(unsubscribe)
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // console.log(user);
      //createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //function to return userRef from firebase.utils because we're going to use it to check if the database has updated
        userRef.onSnapshot(snapShot => {
          //this method send us a snapshot object representing the data that currently stored in database
          setCurrentUser(
            {
              //using combination if id object and the data of snapshot object using snapShot.data
              id: snapShot.id,
              ...snapShot.data()
            },
            () => {
              // to make sure state is fully called, this must pass in a second function as a second parameter
              console.log(this.state);
            }
          );
        });
      } else {
        // this is equivalent to saying currentUser is null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
