import "./scss/index.scss";
import { useState } from "react";

const MyButton = ({ count, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      Clicked {count} times
    </button>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

export default App;
