
import { getDatabase, ref, set} from "firebase/database";

import giveFirebaseApp from "../firebase/initfirebase.js"

function Account() {
  const app = giveFirebaseApp();
  const database = getDatabase(app);

  function writeNewEntry(db, title, text, pics) {
    const time = new Date();
    set(ref(db, 'entries/' + time.getTime()), {
      title: 'Another Tset',
      text: 'I hope this text will work just fine as i want it to work. This will be great! dada',
      pics: []
    });
}

  return (
    <div>
      <button onClick={() => writeNewEntry(database, '', '', [])}> set data </button>
    </div>
  );
}

export default Account;
