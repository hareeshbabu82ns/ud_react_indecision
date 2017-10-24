import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.decision}
    onRequestClose={props.onClose}
    contentLabel="Decision Made!"
  >
    <p>{props.decision}</p>
    <button onClick={props.onClose}>OK</button>
  </Modal>
);
export default OptionModal;
