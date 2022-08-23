// import * as css from "./scss/index.module.scss";
import "./scss/index.scss";
import UserName from "./images/user.png";
// import * as css from "./scss/index.module.scss";
import "./scss/index.scss";
// import UserName from "./images/user.png";
import Records from "./data.json";

const user = {
  name: "Hedy Lamarr",
  imageUrl: UserName,
  imageSize: 90,
};

const MyButton = () => {
  return <button className="button">I'm a button</button>;
};

const AdminPanel = () => {
  return (
    <>
      <p>Admin Panel</p>
    </>
  );
};

const LoginForm = () => {
  return (
    <>
      <p>LoginForm</p>
    </>
  );
};

let content;
let isLoggedIn = true;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

const Auth = () => {
  return <>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</>;
};

const App = () => {
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <MyButton />
    </div>
  );
};

export default App;

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

const listItems = Records.map((product) => (
  <li key={product.id}>{product.title}</li>
));

const App = () => {
  return <div className="container">{listItems}</div>;
};

const App = () => {
  return (
    <div className="container">
      <ul>
        {Records.map((product) => (
          <li
            key={product.id}
            style={{ color: product.isFruit ? "red" : "green" }}
          >
            {product.product}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MyButton = () => {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return (
    <button onClick={handleClick} className="button">
      I'm a button
    </button>
  );
};


import "./scss/index.scss";
import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick} className="button">
      Clicked {count} times
    </button>
  );
};

const App = () => {
  return (
    <div className="container">
      <MyButton />
    </div>
  );
};

export default App;


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