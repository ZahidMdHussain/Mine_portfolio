import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import MenuToggled from "./components/MenuToggled";
import Body from "./components/Body";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
        <About />
        <SocialLinks />
        <MenuToggled />
      </Provider>
    </div>
  );
}

export default App;
