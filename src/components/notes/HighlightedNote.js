import classes from "./HighlightedNote.module.css";

const HighlightedNote = (props) => {
  return (
    <figure className={classes.note}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedNote;
