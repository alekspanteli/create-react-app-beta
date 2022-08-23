import * as css from "./scss/index.module.scss"

const user = {
    name: 'Hedy Lamarr',
  imageUrl: "./user-profile.webp",
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
      <img src="https://codesandbox.io/11c364a1-e9f9-439f-97bb-8a7717f751eb" />
      <MyButton />
    </div>
  );
}

export default App;
