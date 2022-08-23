import * as css from "./scss/index.module.scss"

const user = {
    name: 'Hedy Lamarr',
  imageUrl: './images/user-profile.webp',
  imageSize: 90,
}

const MyButton = () =>{
    return (
    <button className={css.button}>I'm a button</button>
  );
}



const App = () => {
  return (
    <div className={css.app}>
      <h1>{user.name}</h1>
      {/* <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      /> */}
      <img src="./images/user.png" />
      <MyButton />
    </div>
  );
}

export default App;
