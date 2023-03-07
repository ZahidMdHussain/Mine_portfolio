import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import MenuToggled from "./components/MenuToggled";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <MenuToggled />
      </Provider>
    </div>
  );
}

export default App;
