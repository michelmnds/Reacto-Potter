import "./style.css";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { HouseContext } from "../../providers/HouseContext";
import { useContext } from "react";
import xLogo from "../../assets/x.png";
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
            backgroundColor: "#242424",
            textAlign: "center",
            border: "0.15rem solid #b36900",
            borderRadius: "1rem",
          },
          overlay: {
            backgroundColor: "rgba(14, 14, 14, 0.75)",
          },
        }}
      >
        <h2 className="modalHeading">
          {modalType === "create" ? "Create new house" : "Update your house"}
        </h2>
        <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="houseFormInput"
            defaultValue={defaultValues.name}
            {...register("name", {
              required: "This input is required.",
              minLength: {
                value: 3,
                message: "The name must be between 3 and 13 characters",
              },
              maxLength: {
                value: 13,
                message: "The name must be between 3 and 13 characters",
              },
            })}
            placeholder="House Name"
          />
          <input
            name="image"
            className="houseFormInput"
            defaultValue={defaultValues.image}
            {...register("image", { required: true })}
            placeholder="House Image Link"
          />
          <input
            type="submit"
            className="houseFormSubmit"
            value={modalType === "create" ? "Create House" : "Update House"}
          />
        </form>
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
