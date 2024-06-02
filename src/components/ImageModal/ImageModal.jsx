import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0",
    transform: "translate(-50%, -50%)",
    background: "transporent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, modalImg }) {
  return (
    <div className={css.modal}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        className={css.modal}
      >
        <img className={css.img} src={modalImg} alt="" />
      </Modal>
    </div>
  );
}