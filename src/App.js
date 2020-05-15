import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'


import './App.css';

import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage-component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header-component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount(){

      const { setCurrentUser } = this.props
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
           })
        }
        setCurrentUser( userAuth )
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

    render(){
      return (
        <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/collection' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps )(App);
