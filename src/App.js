import { Route, Switch, Redirect } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import NoteDetail from "./pages/NoteDetail";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="notes" />
        </Route>
        <Route path="/notes" exact>
          <AllNotes />
        </Route>
        <Route path="/notes/:noteId">
          <NoteDetail />
        </Route>
        <Route path="/new-note">
          <NewNote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
