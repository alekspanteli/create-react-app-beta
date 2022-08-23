import * as test from "./scss/index.module.scss"

const MyButton = () =>{
    return (
    <button className={test.button}>I'm a button</button>
  );
}



const App = () => {
  return (
    <div className={test.app}>
      <MyButton />
    </div>
  );
}

export default App;
