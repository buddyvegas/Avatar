import React from "react";
import Avatar from "./components/Avatar";

function App() {
  const [name, setName] = React.useState("pouet");

  const changeName = () => {
    setName("billy");
  };

  return (
    <div className="App">
      TEST AVATAR 1 : <Avatar name={name} />
      <br />
      TEST AVATAR 2 : <Avatar name="toto" />
      <p>
        <button onClick={changeName}>Change name AVATAR 1</button>
      </p>
    </div>
  );
}

export default App;
