import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'
import React from 'react'

 const Header = ({ startLogout }) => (
 
     <div className="header-main">
      <header className="header container">
        <Link className="header-title" to="/" exact={true}>
        <h1 >Expensify</h1>
        </Link>
        <button className="logout" onClick={startLogout}>Logout</button>
      </header>
     </div>
    
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)
  

  
  
  