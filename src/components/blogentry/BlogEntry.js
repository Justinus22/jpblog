import Card from "../card/Card"

import classes from "./BlogEntry.module.css"

function BlogEntry(props) {
  return (
    <Card className={classes.card}>
      <div className={classes.date}>
        {props.date}
      </div>
      <div className={classes.entry}>
        <div className={classes.title}>
          {props.data.title}
        </div>
        <div className={classes.text}>
          {props.data.text}
        </div>
      </div>
    </Card>
 
  );
}

export default BlogEntry;
