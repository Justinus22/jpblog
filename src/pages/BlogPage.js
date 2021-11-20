import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react"

import giveFirebaseApp from "../firebase/initfirebase.js"
import BlogEntry from "../components/blogentry/BlogEntry"

function BlogPage(props) {
  const app = giveFirebaseApp();
  const database = getDatabase(app);

  const [entries, setEntries] = useState({});

  function getAllEntries(db) {
    const dbRef = ref(db);
    get(child(dbRef, `entries/`)).then((snapshot) => {
      if (snapshot.exists()) {
         setEntries(snapshot.exportVal());
      } else {
        console.error("No dataavailable");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function msToDate(ms) {
    var date = new Date(parseInt(ms));
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleString('de-DE', options)
  }


  getAllEntries(database)

  return (
    <div>
        {Object.values(entries).map((item, i) => {
            const pubdate = msToDate(Object.keys(entries)[i]);
            return (
                <div>
                  <BlogEntry data={item} date={pubdate}/>
                </div>
            );
        })
        }
      </div>
  );
}

export default BlogPage;
