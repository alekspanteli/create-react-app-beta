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
