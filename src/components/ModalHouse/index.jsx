import "./style.css";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { HouseContext } from "../../providers/HouseContext";
import { useContext } from "react";
//modalType = "create" or "update" to differenciate functions to use
export const ModalHouse = ({
  isModalOpen,
  handleCloseModal,
  modalType,
  houseIdToBeUpdated,
}) => {
  const { createHouse, editHouse } = useContext(HouseContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (modalType === "create") {
      createHouse(data);
    } else if (modalType === "update") {
      editHouse(data, houseIdToBeUpdated);
    }

    handleCloseModal();
  };
  //event.target.key for getting id from the house card

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            top: "30vh",
            left: "30vw",
            right: "30vw",
            bottom: "30vh",
          },
        }}
      >
        <h2 className="modalHeading">
          {modalType === "create" ? "Create new house" : "Update your house"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue=""
            {...register("name")}
            placeholder="House Name"
          />
          <input
            defaultValue=""
            {...register("image")}
            placeholder="House Image Link"
          />
          <input type="submit" />
        </form>
        <button type="button" onClick={handleCloseModal}>
          close
        </button>
      </ReactModal>
    </>
  );
};
