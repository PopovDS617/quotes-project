import { Fragment } from "react";

import QuoteItem from "./NoteItem";
import classes from "./NoteList.module.css";

const NoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default NoteList;
