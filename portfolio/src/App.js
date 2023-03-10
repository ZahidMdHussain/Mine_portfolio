import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import MenuToggled from "./components/MenuToggled";
import Body from "./components/Body";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
        <About />
        <Portfolio />
        <Skills />
        <SocialLinks />
        <MenuToggled />
      </Provider>
    </div>
  );
}

export default App;
