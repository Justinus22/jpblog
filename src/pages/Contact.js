import classes from "./css/Contact.module.css"

import { Link } from "react-router-dom"

function Contact(props) {
  return (
    <div className={classes.page}>
      <p className={classes.title}> Contact info </p>
      <br />
      <div className={classes.info}>
        Justin Becker
      </div>
      <Link to="/account" className={classes.loginlink}> Login for Admin </Link>
    </div>
  );
}


export default Contact;
