import React, { useCallback } from "react";
import { getDatabase, ref, set} from "firebase/database";

import app from "../../firebase/initfirebase.js"

import classes from "./InAccount.module.css"

function InAccount(props) {

  const database = getDatabase(app);

  function writeNewEntry(db, title, text, pics) {
    const time = new Date();
    set(ref(db, 'entries/' + time.getTime()), {
      title: title,
      text: text,
      pics: pics
    });
  }

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const {title, text , pics} = event.target.elements;

    writeNewEntry(database, title.value, text.value, pics.value)
    // console.log(title, text, pics)

  }, []);

  return (
    <div>
      <p> Create Blog Entry </p>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" placeholder="Title" className={classes.titleinput}/>
        </label>
        <br />
        <label>
          Text
          <input name="text" type="text" placeholder="text" className={classes.textinput} />
        </label>
        <br />
        <label>
          Pics:
          <input name="pics" type="text" placeholder="Pics" className={classes.picsinput} />
        </label>
        <br />
        <button type="submit">Create Entry</button>
      </form>
      <br />

      <button onClick={() => app.auth().signOut()}> Sign Out </button>
  </div>
  );




}

export default InAccount;
