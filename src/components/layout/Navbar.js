import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_volunteer from './Navbar_volunteer'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Navbar_patient from './Navbar_patient'


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  let links
  if (auth.email != null && auth.phoneNumber == null) 
  {
    links = auth.email ? <Navbar_volunteer profile={profile} /> : <SignedOutLinks />;
  } 
  else if (auth.phoneNumber != null && auth.email == null) 
  {
     links = auth.phoneNumber ? <Navbar_patient profile={profile} /> : <SignedOutLinks />;
  }
  else
  { 
    links = auth.email ? <Navbar_volunteer profile={profile} /> : <SignedOutLinks />;

  }
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">One4All</Link>
        {links}

      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)