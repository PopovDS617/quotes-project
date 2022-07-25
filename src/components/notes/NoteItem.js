import { Link } from "react-router-dom";
import classes from "./NoteItem.module.css";
import { useParams } from "react-router-dom";

const NoteItem = (props) => {
  const params = useParams();

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`notes/${props.id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default NoteItem;
