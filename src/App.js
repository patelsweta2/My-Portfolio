import "./style/app.css";
import { About } from "./component/About";

export const App = () => {
  return (
    <div className="app">
      <div className="left-container">
        <About />
      </div>
      <div className="right-container"></div>
    </div>
  );
};
