import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/shopping-cart.svg'
import { auth } from '../../firebase/firebase.utils'



import './header-styles.scss'


const Header = ({ currentUser }) => (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark">
  <Link className="logo-container" to='/'>
      <Logo className='logo' />
  </Link>
      <h1 className='title-h'>CartLog</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul className="navbar-nav ml-auto">
        <li>
        <Link className="login" to="/collection">
          SHOP
        </Link>
        </li>
        <li>
        <Link className="login" to='/contact'>
          CONTACT
          </Link>
        </li>
        <li>   
          {
            currentUser ? (
              <div className='login' onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <Link className="login" to="signin">SIGN IN</Link>
            )
          }
        </li>
        
    </ul>
  </div>
</nav>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)