import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalActive , setModalActive] = useState(false)
  return (
    <div className="App">
      <button className='openModal' onClick={() => setModalActive(true)}>Open window</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
