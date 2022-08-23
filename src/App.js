// import * as css from "./scss/index.module.scss";
import "./scss/index.scss";
import UserName from "./images/user.png";

const user = {
  name: "Hedy Lamarr",
  imageUrl: UserName,
  imageSize: 90,
};

const MyButton = () => {
  return <button className="button">I'm a button</button>;
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
