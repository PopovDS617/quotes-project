import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { onAddedComment, onFinishComment } = props;

  const { status, sendRequest, error } = useHttp(addComment);

  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    sendRequest({
      commentData: {
        text: enteredText,
      },
      quoteId: props.quoteId,
    });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
      onFinishComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add a Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
