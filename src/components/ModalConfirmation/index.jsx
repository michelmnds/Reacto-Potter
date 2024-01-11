import "./style.css";
import ReactModal from "react-modal";
import { HouseContext } from "../../providers/HouseContext";
import { useContext } from "react";
import xLogo from "../../assets/x.png";
//modalType = "create" or "update" to differenciate functions to use
export const ModalConfirmation = ({
  isModalOpen,
  handleCloseModal,
  houseIdToBeUpdated,
}) => {
  const { deleteHouse } = useContext(HouseContext);

  const handleDeleteHouse = () => {
    deleteHouse(houseIdToBeUpdated);
    handleCloseModal();
  };

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        className="modalConfirmationContentCtn"
        style={{
          overlay: {
            backgroundColor: "rgba(14, 14, 14, 0.75)",
          },
        }}
      >
        <h2 className="modalHeading">
          Are you sure you want to delete this house?
        </h2>

        <div className="modalConfirmationBtnCtn">
          <button
            className="modalConfirmationCancelBtn"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="modalConfirmationDeleteBtn"
            onClick={() => handleDeleteHouse()}
          >
            Delete
          </button>
        </div>

        <img
          className="closeIcon"
          src={xLogo}
          alt="close modal"
          onClick={handleCloseModal}
        />
      </ReactModal>
    </>
  );
};
