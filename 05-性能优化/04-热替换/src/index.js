import a from "./a.js";
import "./index.css";
console.log(a);

if (module.hot) {
  module.hot.accept();
}
