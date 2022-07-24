import classes from "./NoNotesFound.module.css";

const NoNotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className="btn">Add a Quote</a>
    </div>
  );
};

export default NoNotesFound;
