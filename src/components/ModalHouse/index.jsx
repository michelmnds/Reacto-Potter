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
  houseName,
  houseImage,
}) => {
  const { createHouse, editHouse } = useContext(HouseContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (modalType === "create") {
      createHouse(data);
    } else if (modalType === "update") {
      editHouse(data, houseIdToBeUpdated);
    }

    handleCloseModal();
  };

  const defaultValues =
    modalType === "update"
      ? { name: `${houseName}`, image: `${houseImage}` }
      : { name: "", image: "" };

  const handleInitialValue = () => {
    if (modalType === "create") {
      reset();
    } else if (modalType === "update") {
      reset();
    }
  };

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onAfterOpen={handleInitialValue}
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
            defaultValue={defaultValues.name}
            {...register("name")}
            placeholder="House Name"
          />
          <input
            defaultValue={defaultValues.image}
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
