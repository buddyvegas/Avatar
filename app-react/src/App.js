import React from "react";
import Avatar from "./components/Avatar";

function App() {
  const [name, setName] = React.useState("pouet");

  const changeName = () => {
    setName("billy");
  };

  return (
    <div className="App">
      TEST AVATAR : <Avatar name={name} />
      <p>
        <button onClick={changeName}>Change name</button>
      </p>
    </div>
  );
}

export default App;
