import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "./components/button/Button";

function App() {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = () => {
    setModalActive(true);
  };

  return (
    <div className="App">
      <Modal active={modalActive} setActive={setModalActive} />
      <Button
        size={"openModal"}
        innerText={"Open window"}
        color={"primary"}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
