import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(false);

  const showModal = () => {
    setOverlay(!overlay);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Appointment" onClick={showModal} />
      <Todo title="Appointment" onClick={showModal} />
      {overlay && <Modal onClick={showModal} />}
      {overlay && <Backdrop onClick={showModal} />}
    </div>
  );
}

export default App;
