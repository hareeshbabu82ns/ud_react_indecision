import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.decision}
    onRequestClose={props.onClose}
    contentLabel="Decision Made!"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.decision}</p>
    <button className="button" onClick={props.onClose}>
      OK
    </button>
  </Modal>
);
export default OptionModal;
