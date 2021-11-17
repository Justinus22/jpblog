import classes from "./Navbar.module.css"

import { Link } from "react-router-dom"
import React, { Component } from "react"

import { NavItems } from "./NavItems"

class Navbar extends Component {
  state = {clicked: false};

  menuClickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render () {
    return (
      <header className={classes.header}>
          <nav className={classes.nav}>
            <div className={classes.titlediv}>
                <div className={classes.title}>
                    <Link to="/" className={classes.titlelink}> Japan Blog </Link>
                </div>
                <div className={classes.autor}>
                    <p> by Justin Becker </p>
                </div>
              </div>

              <div className={classes.menuicon} onClick={this.menuClickHandler}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
              </div>
            <ul className={this.state.clicked ? classes.navmenu + ' ' + classes.active : classes.navmenu}>
                {NavItems.map((item, index) => {
                  return (
                    <li>
                      <div className={item.cName.indexOf("blog") === -1 ? classes.account : classes.bloglink}>
                        <Link to={item.url} className={classes.navel} onClick={this.menuClickHandler}>{item.title}</Link>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </nav>
      </header>
    );
}
}

export default Navbar;


// <li>
//     <div className={classes.bloglink}>
//          <Link to='/blog' className={classes.navel}> Blog </Link>
//     </div>
// </li>
// <li>
//     <div className={classes.login}>
//       <Link to="/login" className={classes.navel}> Log In </Link>
//     </div>
// </li>
