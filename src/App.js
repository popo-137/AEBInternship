import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
      <BrowserRouter>
          <NavBar />
        <AppRouter/>
      </BrowserRouter>

  );
}

export default App;
