import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({
      author: enteredAuthor,
      text: enteredText,
      //id: Math.random(),
    });
  }

  const formFocusHandler = () => {
    setEntering(true);
  };

  return (
    <React.Fragment>
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setEntering(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
