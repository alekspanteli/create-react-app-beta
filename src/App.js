// import * as css from "./scss/index.module.scss";
import "./scss/index.scss";
// import UserName from "./images/user.png";
import Records from "./data.json";

const App = () => {
  return (
    <div className="container">
      <ul>
        {Records.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
